import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { UrlStateService } from '../state/url-state.service';
import { NB_WINDOW } from '@nebular/theme';

@Component({
  selector: 'tf-preview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./preview.component.scss'],
  template: `
    <iframe *ngIf="url$ | async" [src]="url$ | async" #iframe (load)="onload(iframe)"></iframe>
  `,
})
export class PreviewComponent {
  url$: Observable<SafeResourceUrl> = this.urlState.url$.pipe(
    filter(url => !!url),
    map((url: string) => this.sanitizer.bypassSecurityTrustResourceUrl(url)),
  );

  private window: Window;

  constructor(private urlState: UrlStateService,
              private sanitizer: DomSanitizer,
              @Inject(NB_WINDOW) window) {
    this.window = window;
  }

  onload(iframe: HTMLIFrameElement) {
    iframe.contentWindow.postMessage({ action: 'setup' }, '*');

    fromEvent(this.window, 'message')
      .pipe(
        map((message: any) => message.data),
        filter(({ action }) => !!action),
      )
      .subscribe(data => {
        console.log(data);
      });
  }
}
