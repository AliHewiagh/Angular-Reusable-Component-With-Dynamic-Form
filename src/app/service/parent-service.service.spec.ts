import { TestBed } from '@angular/core/testing';

import { ParentServiceService } from './parent-service.service';

describe('ParentServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParentServiceService = TestBed.get(ParentServiceService);
    expect(service).toBeTruthy();
  });
});
