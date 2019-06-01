import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StepsComponent } from './steps/steps.component';
import { StepsLibComponent } from './steps-lib/steps-lib.component';
import { StepConfigComponent } from './step-config/step-config.component';

const routes: Routes = [
  {
    path: 'steps',
    component: StepsComponent,
  },
  {
    path: 'steps-lib',
    component: StepsLibComponent,
  },
  {
    path: 'step-config/:step',
    component: StepConfigComponent,
  },
  {
    path: '',
    redirectTo: 'steps',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
