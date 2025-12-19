import { inject, Injectable, signal } from '@angular/core';
import { Todo, Todos } from '../models/todo';
import { TodoService } from '../services/todo-service';

@Injectable({
  providedIn: 'root',
})
export class TodoStore {
  private readonly data = signal<Todos>([]);
  private readonly todoListService: TodoService = inject(TodoService);
  readonly todos = this.data.asReadonly();

  loadTodos() {
    this.todoListService.findAll().subscribe((dataTodos) => this.data.set(dataTodos));
  }

  deleteTodo(todo: Todo) {
    this.todoListService.delete(todo).subscribe(() => {
      const newTodos = this.data().filter((currentTodo) => currentTodo.id !== todo.id);
      this.data.set(newTodos);
    });

    /*  
    this.data.update(currentTodos => currentTodos.filter((currentTodo) => currentTodo.id !== todo.id))

    */
  }
  saveTodo(todo: Todo) {
    this.todoListService.save(todo).subscribe((savedTodo) => {
      this.data.update((todos) => [...todos, savedTodo]);
    });
  }
}
