import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SelectComponentService } from '../select-component.service';
import { StepStateService } from '../state/step-state.service';

@Component({
  selector: 'f-step-config',
  templateUrl: './step-config.component.html',
  styleUrls: ['./step-config.component.scss'],
})
export class StepConfigComponent implements OnInit {

  constructor(private select: SelectComponentService,
              private stepState: StepStateService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    const stepId = this.route.snapshot.paramMap.get('step');

    this.select.select().subscribe(path => {
      this.stepState.add(stepId, path);
      this.router.navigateByUrl('/steps');
    });
  }
}
