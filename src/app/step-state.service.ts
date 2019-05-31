import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const mockSteps = [
  { title: 'Select' },
  { title: 'Click' },
  { title: 'Verify' },
  { title: 'Some other step' },
];

export interface Step {
  title: string;
}

@Injectable({ providedIn: 'root' })
export class StepStateService {
  private steps: BehaviorSubject<Step[]> = new BehaviorSubject<Step[]>([...mockSteps]);
  public readonly steps$: Observable<Step[]> = this.steps.asObservable();
}
