import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SidebarStateService {
  private libOpened: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly libOpened$: Observable<boolean> = this.libOpened.asObservable();

  openLib() {
    this.libOpened.next(true);
  }

  openSteps() {
    this.libOpened.next(false);
  }
}
