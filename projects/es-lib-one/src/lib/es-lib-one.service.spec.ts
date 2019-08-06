import { TestBed } from '@angular/core/testing';

import { EsLibOneService } from './es-lib-one.service';

describe('EsLibOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EsLibOneService = TestBed.get(EsLibOneService);
    expect(service).toBeTruthy();
  });
});
