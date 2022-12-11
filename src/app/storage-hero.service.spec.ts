import { TestBed } from '@angular/core/testing';

import { StorageHeroService } from './storage-hero.service';

describe('StorageHeroService', () => {
  let service: StorageHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
