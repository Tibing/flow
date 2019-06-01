import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { filter, map, mergeMap, take, tap } from 'rxjs/operators';
import { NB_WINDOW } from '@nebular/theme';

@Injectable({ providedIn: 'root' })
export class SelectComponentService {
  private frameWindow: BehaviorSubject<Window> = new BehaviorSubject(null);
  readonly frameWindow$: Observable<Window> = this.frameWindow.asObservable();

  private window: Window;

  constructor(@Inject(NB_WINDOW) window) {
    this.window = window;
  }

  setIframe(frameWindow: Window) {
    this.frameWindow.next(frameWindow);
  }

  select(): Observable<string> {
    return this.frameWindow$.pipe(
      tap((frameWindow: Window) => frameWindow.postMessage({ action: 'setup' }, '*')),
      mergeMap(() => fromEvent(this.window, 'message')),
      map((message: any) => message.data),
      filter(({ action }) => action === 'select-complete'),
      map(({ data }) => data),
      take(1),
    );
  }
}
