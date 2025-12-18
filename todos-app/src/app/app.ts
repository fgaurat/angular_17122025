import { Component, signal } from '@angular/core';
import { Todo } from './features/todos/components/todo/todo';
import { TodoForm } from "./features/todos/components/todo-form/todo-form";

@Component({
  selector: 'app-root',
  imports: [Todo, TodoForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('todos-app');

  title2 = 'Application angular';
}
