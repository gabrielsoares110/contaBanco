import { TestBed } from '@angular/core/testing';

import { ListaTransferenciaService } from './lista-transferencia.service';

describe('ListaTransferenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaTransferenciaService = TestBed.get(ListaTransferenciaService);
    expect(service).toBeTruthy();
  });
});
