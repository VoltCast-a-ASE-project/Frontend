import { TestBed } from '@angular/core/testing';

import { Hashing } from './hashing';

describe('Hashing', () => {
  let service: Hashing;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hashing);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
