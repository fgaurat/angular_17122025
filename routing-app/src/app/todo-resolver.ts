import { ResolveFn } from '@angular/router';
import { TodoService } from '../todo.service';
import { inject } from '@angular/core';

export const todoResolver: ResolveFn<Todo> = (route, state) => {
  const todoService = inject(TodoService);
  const id = Number(route.paramMap.get('id')!);

  return todoService.getTodoById(id);
};
