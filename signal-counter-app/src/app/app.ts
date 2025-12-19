import {
  Component,
  computed,
  effect,
  Signal,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';
import { IncComponent } from "./inc-component/inc-component";
import { ShowComponent } from "./show-component/show-component";

@Component({
  selector: 'app-root',
  imports: [IncComponent, ShowComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title: WritableSignal<string> = signal('signal-counter-app');
  readonly count: WritableSignal<number> = signal(0);
  readonly doubleCount: Signal<number> = computed(() => this.count() * 2);
  readonly showCount = signal(false);

  customers = [
    {
      id: 1,
      name: 'client 1',
      amount: 10,
    },
    {
      id: 2,
      name: 'client 2',
      amount: 20,
    },
    {
      id: 3,
      name: 'client 3',
      amount: 30,
    },
  ];

  readonly customersSignal = signal(this.customers);

  customersAmount = computed(() => {
    return this.customersSignal().reduce((acc, current) => acc + current.amount, 0);
  });

  conditionalCount = computed(() => {
    if (this.showCount()) {
      return `The count is ${this.count()}.`;
    } else {
      return 'Nothing to see here!';
    }
  });

  addCustomer() {
    this.customersSignal.update((customers) => {
      // const newCustomer = [...customers];
      // newCustomer.push({
      //   id: 4,
      //   name: 'client 4',
      //   amount: 40,
      // });

      // return newCustomer;
      return [
        ...customers,
        {
          id: 4,
          name: 'client 4',
          amount: 40,
        },
      ];
    });
  }
  setTo2() {
    this.count.set(2);
  }
  setTo5Time() {
    setTimeout(() => {
      this.count.set(5);
    }, 500);
  }

  inc() {
    this.count.update((value) => value + 1);

    const arr = [0, 1, 2];

    console.log(arr);
  }
  toggleShowCount() {
    this.showCount.update((v) => !v);
  }

  constructor() {
    effect(() => {
      console.log(
        `new count value: ${this.count()}  ${untracked(() => {
          return this.showCount();
        })}`
      );
    });

    effect(() => {
      console.log(`new doubleCount value: ${this.doubleCount()}`);
    });
  }
}
