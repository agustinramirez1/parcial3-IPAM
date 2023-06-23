import { TestBed } from '@angular/core/testing';

import { VacunasPorMascotaService } from './vacunas-por-mascota.service';

describe('VacunasPorMascotaService', () => {
  let service: VacunasPorMascotaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacunasPorMascotaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
