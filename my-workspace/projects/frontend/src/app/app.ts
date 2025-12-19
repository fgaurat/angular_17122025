import { Component, signal } from '@angular/core';
import { MyButton } from 'shared-ui';

@Component({
  selector: 'app-root',
  imports: [MyButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
