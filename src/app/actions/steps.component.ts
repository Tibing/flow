import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Step, StepStateService } from '../step-state.service';

@Component({
  selector: 'tf-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  steps$: Observable<Step[]> = this.stepState.steps$;

  constructor(private stepState: StepStateService) {
  }
}
