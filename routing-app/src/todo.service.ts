import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Todos } from '../models/todo';
import { Todo as TodoModel } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http: HttpClient = inject(HttpClient);
  readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  findAll(): Observable<Todos> {
    return this.http.get<Todos>(environment.urlTodos);
  }

  delete(todo: TodoModel): Observable<void> {
    const url = `${environment.urlTodos}/${todo.id}`;
    return this.http.delete<void>(url);
  }
  save(todo: TodoModel): Observable<TodoModel> {
    return this.http.post<TodoModel>(environment.urlTodos, todo, this.httpOptions);
  }

  getTodoById(id: number) {
    return this.http.get<Todos>(environment.urlTodos + '/' + id);
  }
}
