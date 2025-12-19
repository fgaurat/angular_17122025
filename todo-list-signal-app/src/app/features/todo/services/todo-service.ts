import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Todo, Todos } from '../models/todo';

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

  delete(todo: Todo): Observable<void> {
    const url = `${environment.urlTodos}/${todo.id}`;
    return this.http.delete<void>(url);
  }

  save(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(environment.urlTodos, todo, this.httpOptions);
  }
}
