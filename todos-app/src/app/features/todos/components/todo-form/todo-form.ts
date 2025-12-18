import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Todo } from '../../models/todo';
import { MessageQueue } from '../../../../core/services/message-queue';
import { ActionType } from '../../../../core/enums/action-type';

@Component({
  selector: 'app-todo-form',
  imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule, MatButtonModule, FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  todoFormModel: Todo = {
    title: '',
    completed: false,
  };

  messageQueueService: MessageQueue = inject(MessageQueue);

  submitTodo() {
    this.messageQueueService.dispatch({ type: ActionType.NEW_TODO, payload: this.todoFormModel });
  }
}
