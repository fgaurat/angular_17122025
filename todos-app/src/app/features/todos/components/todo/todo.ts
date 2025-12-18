import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Todo as TodoService } from '../../data/todo';
import { Todos } from '../../models/todo';
import { Todo as TodoModel } from '../../models/todo';
import { filter, merge, Observable, switchMap } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MessageQueue } from '../../../../core/services/message-queue';
import { ActionType } from '../../../../core/enums/action-type';
import { Action } from '../../../../core/models/action';

@Component({
  selector: 'app-todo',
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  messageQueueService: MessageQueue = inject(MessageQueue);

  changeDetectorRef = inject(ChangeDetectorRef);
  todoService: TodoService = inject(TodoService);
  todos$: Observable<Todos> = this.todoService.findAll();
  displayedColumns = ['id', 'title', 'completed', 'action'];
  // todos: Todos = [];
  // ngOnInit() {
  //   this.todoService.findAll().subscribe((todos) => (this.todos = todos));
  // }

  constructor() {
    const delete$ = this.messageQueueService.bus$.pipe(
      filter((action: Action) => action.type === ActionType.DELETE_TODO),
      switchMap((action: Action) => this.todoService.delete(action.payload))
    );

    const add$ = this.messageQueueService.bus$.pipe(
      filter((action: Action) => action.type === ActionType.NEW_TODO),
      switchMap((action: Action) => this.todoService.save(action.payload))
    );

    const load$ = this.messageQueueService.bus$.pipe(
      filter((action: Action) => action.type === ActionType.LOAD_TODOS)
    );

    this.todos$ = merge(delete$, add$, load$).pipe(switchMap(() => this.todoService.findAll()));
  }

  delete(todo: TodoModel) {
    // c'est moche
    // this.todoService.delete(todo).subscribe(() => {
    //   this.todos$ = this.todoService.findAll();
    //   this.changeDetectorRef.markForCheck();
    // });
    //this.todos$ = this.todoService.delete(todo).pipe(switchMap(() => this.todoService.findAll()));
    this.messageQueueService.dispatch({ type: ActionType.DELETE_TODO, payload: todo });
  }

  ngAfterViewInit() {
    this.messageQueueService.dispatch({ type: ActionType.LOAD_TODOS });
  }
}
