import { TestBed } from '@angular/core/testing';

import { ElementControlService } from './element-control.service';

describe('ElementControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElementControlService = TestBed.get(ElementControlService);
    expect(service).toBeTruthy();
  });
});
