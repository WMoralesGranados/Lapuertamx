import { TestBed } from '@angular/core/testing';

import { MilanService } from './milan.service';

describe('MilanService', () => {
  let service: MilanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
