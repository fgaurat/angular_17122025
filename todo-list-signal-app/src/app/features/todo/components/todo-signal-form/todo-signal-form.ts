import { Component, inject, signal } from '@angular/core';
import { Todo } from '../../models/todo';
import { form, Field, SchemaPathTree, PathKind, required } from '@angular/forms/signals';
import { TodoStore } from '../../stores/todo-store';

@Component({
  selector: 'app-todo-signal-form',
  imports: [Field],
  templateUrl: './todo-signal-form.html',
  styleUrl: './todo-signal-form.css',
})
export class TodoSignalForm {
  todoStore: TodoStore = inject(TodoStore);
  todoModel = signal<Todo>({
    title: '',
    completed: false,
  });

  todoForm = form(this.todoModel, (schemaPath: SchemaPathTree<Todo>) => {
    required(schemaPath.title);
  });

  submitTodo(event: Event) {
    event.preventDefault();
    console.log(this.todoModel());
    this.todoStore.saveTodo(this.todoModel());
  }
}
