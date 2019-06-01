import { Component } from '@angular/core';

import { stepsLib } from '../state/step-state.service';

@Component({
  selector: 'f-steps-lib',
  templateUrl: './steps-lib.component.html',
  styleUrls: ['./steps-lib.component.scss'],
})
export class StepsLibComponent {
  steps = stepsLib;
}
