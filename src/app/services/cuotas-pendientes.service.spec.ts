import { TestBed } from '@angular/core/testing';

import { CuotasPendientesService } from './cuotas-pendientes.service';

describe('CuotasPendientesService', () => {
  let service: CuotasPendientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuotasPendientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
