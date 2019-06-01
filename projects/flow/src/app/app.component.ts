import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UrlStateService } from './state/url-state.service';

@Component({
  selector: 'f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  urlExist$: Observable<boolean> = this.urlState.urlExist$;

  constructor(private urlState: UrlStateService) {
  }
}
