import { Injectable } from '@angular/core';
import { Action } from '../models/action';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageQueue {
  private bus: Subject<Action> = new Subject<Action>();
  bus$: Observable<Action> = this.bus.asObservable();

  dispatch(action: Action) {
    console.log(action);
    this.bus.next(action);
  }
}
