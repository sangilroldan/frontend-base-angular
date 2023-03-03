import { TestBed } from '@angular/core/testing';

import { CiudadanosApiService } from './ciudadanos-api.service';

describe('CiudadanosApiService', () => {
  let service: CiudadanosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadanosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
