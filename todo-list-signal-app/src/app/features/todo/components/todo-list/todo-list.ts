import { Component, inject, OnInit } from '@angular/core';
import { TodoStore } from '../../stores/todo-store';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList implements OnInit {
  todoStore: TodoStore = inject(TodoStore);

  ngOnInit(): void {
    this.todoStore.loadTodos();
  }

  delete(todo: Todo) {
    this.todoStore.deleteTodo(todo);
  }
}
