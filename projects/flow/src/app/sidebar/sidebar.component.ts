import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpecBuilderService } from '../spec-builder.service';
import { Step, StepStateService } from '../state/step-state.service';

@Component({
  selector: 'f-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(private specBuilder: SpecBuilderService,
              private stepState: StepStateService) {
  }

  downloadSpec() {
    this.stepState.steps$.subscribe((steps: Step[]) => {
      const spec: string = this.specBuilder.build(steps);
      console.log(spec);
    });
  }
}
