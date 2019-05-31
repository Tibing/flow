import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UrlStateService {
  private url: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public readonly url$: Observable<string> = this.url.asObservable();

  setUrl(url: string) {
    this.url.next(url);
  }
}
