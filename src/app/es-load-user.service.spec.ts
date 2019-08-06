import { TestBed } from '@angular/core/testing';

import { EsLoadUserService } from './es-load-user.service';

describe('EsLoadUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsLoadUserService = TestBed.get(EsLoadUserService);
    expect(service).toBeTruthy();
  });
});
