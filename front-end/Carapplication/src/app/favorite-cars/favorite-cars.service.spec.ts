import { TestBed } from '@angular/core/testing';

import { FavoriteCarsService } from './favorite-cars.service';

describe('FavoritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavoriteCarsService = TestBed.get(FavoriteCarsService);
    expect(service).toBeTruthy();
  });
});
