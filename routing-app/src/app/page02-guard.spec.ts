import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { page02Guard } from './page02-guard';

describe('page02Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => page02Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
