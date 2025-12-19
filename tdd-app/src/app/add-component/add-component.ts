import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-component',
  imports: [FormsModule],
  templateUrl: './add-component.html',
  styleUrl: './add-component.css',
})
export class AddComponent {
  val1: number = 0;
  val2: number = 0;
  result: number = 0;

  sum() {
    this.result = this.val1 + this.val2;
  }
}
