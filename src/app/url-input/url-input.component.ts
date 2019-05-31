import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'tf-url-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./url-input.component.scss'],
  template: `
    <input autofocus placeholder="https://google.com">
  `,
})
export class UrlInputComponent {
}
