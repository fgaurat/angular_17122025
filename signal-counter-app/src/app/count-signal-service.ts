import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountSignalService {
  private readonly counter: WritableSignal<number> = signal(0);
  count = this.counter.asReadonly();

  inc() {
    this.counter.update((v) => v + 1);
  }
}
