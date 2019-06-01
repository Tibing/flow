import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UrlStateService } from '../state/url-state.service';

@Component({
  selector: 'f-url-input',
  styleUrls: ['./url-input.component.scss'],
  templateUrl: './url-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UrlInputComponent {
  folded = false;
  url = '';

  constructor(private urlState: UrlStateService) {
  }

  load() {
    this.folded = true;
    this.urlState.setUrl(this.url);
  }
}
