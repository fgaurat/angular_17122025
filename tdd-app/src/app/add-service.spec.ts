import { TestBed } from '@angular/core/testing';

import { AddService } from './add-service';

describe('AddService', () => {
  let service: AddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    const i = service.add(2, 1);
    expect(i).toBe(3);
  });
});
