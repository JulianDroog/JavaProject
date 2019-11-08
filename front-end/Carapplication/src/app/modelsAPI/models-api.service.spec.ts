import { TestBed } from '@angular/core/testing';

import { ModelsAPIService } from './models-api.service';

describe('ModelsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModelsAPIService = TestBed.get(ModelsAPIService);
    expect(service).toBeTruthy();
  });
});
