import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { UrlStateService } from '../url-state.service';

@Component({
  selector: 'tf-preview',
  styleUrls: ['./preview.component.scss'],
  template: `
    <iframe *ngIf="url$ | async" [src]="url$ | async"></iframe>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreviewComponent {
  url$: Observable<SafeResourceUrl> = this.urlState.url$.pipe(
    filter(url => !!url),
    map((url: string) => this.sanitizer.bypassSecurityTrustResourceUrl(url)),
  );

  constructor(private urlState: UrlStateService,
              private sanitizer: DomSanitizer) {
  }
}
