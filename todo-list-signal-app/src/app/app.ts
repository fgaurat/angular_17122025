import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./features/todo/components/todo-list/todo-list";
import { TodoReactiveForm } from "./features/todo/components/todo-reactive-form/todo-reactive-form";
import { TodoSignalForm } from "./features/todo/components/todo-signal-form/todo-signal-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoList, TodoReactiveForm, TodoSignalForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-list-signal-app');
}
