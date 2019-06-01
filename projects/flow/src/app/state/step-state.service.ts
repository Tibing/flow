import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface StepDefinition {
  id: string;
  title: string;
}

export interface Step {
  id: string;
  xpath: string;
  definition: StepDefinition;
}

export const stepsLib: StepDefinition[] = [
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
];

@Injectable({ providedIn: 'root' })
export class StepStateService {
  private steps: BehaviorSubject<Step[]> = new BehaviorSubject<Step[]>([]);
  public readonly steps$: Observable<Step[]> = this.steps.asObservable();

  add(stepId: string, xpath: string) {
    const steps: Step[] = this.steps.getValue();
    const definition: StepDefinition = stepsLib.find((d: StepDefinition) => d.id === stepId);
    this.steps.next([...steps, { id: stepId, xpath, definition }]);
  }
}
