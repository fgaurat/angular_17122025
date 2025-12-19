import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from "./add-component/add-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tdd-app');
}
