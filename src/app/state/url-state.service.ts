import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UrlStateService {
  private url: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly url$: Observable<string> = this.url.asObservable();

  public readonly urlExist$: Observable<boolean> = this.url$.pipe(
    map((url: string) => !!url),
  );

  setUrl(url: string) {
    this.url.next(url);
  }
}
