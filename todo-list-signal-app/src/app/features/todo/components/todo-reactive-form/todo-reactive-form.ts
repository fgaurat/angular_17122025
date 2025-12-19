import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TodoStore } from '../../stores/todo-store';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './todo-reactive-form.html',
  styleUrl: './todo-reactive-form.css',
})
export class TodoReactiveForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly todoStore = inject(TodoStore);

  todoForm = this.formBuilder.group({
    title: ['', Validators.required],
    completed: [false],
    tags: this.formBuilder.array([]),
  });

  get tags(): FormArray {
    return this.todoForm.get('tags') as FormArray;
  }

  addTags() {
    this.tags.push(this.formBuilder.control(''));
  }
  removeTags(index: number) {
    this.tags.removeAt(index);
  }

  submitTodo() {
    console.log(this.todoForm.value);

    // this.todoStore.saveTodo(this.todoForm.value as Todo);
  }
}
