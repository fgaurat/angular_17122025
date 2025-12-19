import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  add(x: number, y: number): number {
    return x + y;
  }
}
