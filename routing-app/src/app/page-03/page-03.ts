import { HttpClient } from '@angular/common/http';
import { Component, inject, input, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-03',
  imports: [],
  templateUrl: './page-03.html',
  styleUrl: './page-03.css',
})
export class Page03 {
  // activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  // firstName: string = this.activatedRoute.snapshot.params['firstname'];

  // @Input()
  // firstname: string = '';
  firstname = input<string>();
  httpService: HttpClient = inject(HttpClient);

  constructor() {
    this.httpService.get('http://localhost:3000/todos').subscribe();
  }
}
