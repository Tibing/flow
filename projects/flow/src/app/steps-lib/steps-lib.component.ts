import { Component } from '@angular/core';

import { SidebarStateService } from '../state/sidebar-state.service';

@Component({
  selector: 'f-steps-lib',
  templateUrl: './steps-lib.component.html',
  styleUrls: ['./steps-lib.component.scss'],
})
export class StepsLibComponent {
  constructor(private sidebarState: SidebarStateService) {
  }

  openSteps() {
    this.sidebarState.openSteps();
  }
}
