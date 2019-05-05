import { TestBed } from '@angular/core/testing';

import { ReqResService } from './req-res.service';

describe('ReqResService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReqResService = TestBed.get(ReqResService);
    expect(service).toBeTruthy();
  });
});
