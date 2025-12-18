import { TestBed } from '@angular/core/testing';

import { MessageQueue } from './message-queue';

describe('MessageQueue', () => {
  let service: MessageQueue;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageQueue);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
