import { TestBed } from '@angular/core/testing';

import { HelloService } from './card.service';

describe('HelloService', () => {
  let service: HelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
