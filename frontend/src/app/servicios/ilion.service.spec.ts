import { TestBed } from '@angular/core/testing';

import { ilionService } from './ilion.service';

describe('ilionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ilionService = TestBed.get(ilionService);
    expect(service).toBeTruthy();
  });
});