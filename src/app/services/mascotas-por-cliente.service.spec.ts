import { TestBed } from '@angular/core/testing';

import { MascotasPorClienteService } from './mascotas-por-cliente.service';

describe('MascotasPorClienteService', () => {
  let service: MascotasPorClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MascotasPorClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
