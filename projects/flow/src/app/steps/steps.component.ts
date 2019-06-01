import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Step, StepStateService } from '../state/step-state.service';
import { SidebarStateService } from '../state/sidebar-state.service';

@Component({
  selector: 'f-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  steps$: Observable<Step[]> = this.stepState.steps$;

  constructor(private stepState: StepStateService,
              private sidebarState: SidebarStateService) {
  }

  openLib() {
    this.sidebarState.openLib();
  }
}
