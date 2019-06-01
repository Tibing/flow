import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { UrlStateService } from '../state/url-state.service';
import { SelectComponentService } from '../select-component.service';

@Component({
  selector: 'f-preview',
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

  constructor(private urlState: UrlStateService,
              private sanitizer: DomSanitizer,
              private selectComponentService: SelectComponentService) {
  }

  onload(iframe: HTMLIFrameElement) {
    this.selectComponentService.setIframe(iframe.contentWindow);
  }
}
