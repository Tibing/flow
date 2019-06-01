import { Component } from '@angular/core';

import { SidebarStateService } from '../state/sidebar-state.service';
import { SelectComponentService } from '../select-component.service';

interface Step {
  id: string;
  title: string;
}

const steps: Step[] = [
  {
    id: 'hover',
    title: 'Hover',
  },
  {
    id: 'focus',
    title: 'Focus',
  },
  {
    id: 'click',
    title: 'Click',
  },
  {
    id: 'send-keys',
    title: 'Send Keys',
  },
];

@Component({
  selector: 'f-steps-lib',
  templateUrl: './steps-lib.component.html',
  styleUrls: ['./steps-lib.component.scss'],
})
export class StepsLibComponent {
  steps = steps;

  constructor(private sidebarState: SidebarStateService,
              private select: SelectComponentService) {
  }

  openSteps() {
    this.sidebarState.openSteps();
  }

  add(step: Step) {
    console.log(step);
    this.select.select().subscribe(path => {
      console.log(path);
    });
  }
}
