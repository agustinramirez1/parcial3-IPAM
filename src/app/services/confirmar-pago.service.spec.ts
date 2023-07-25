import { TestBed } from '@angular/core/testing';

import { ConfirmarPagoService } from './confirmar-pago.service';

describe('ConfirmarPagoService', () => {
  let service: ConfirmarPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmarPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});