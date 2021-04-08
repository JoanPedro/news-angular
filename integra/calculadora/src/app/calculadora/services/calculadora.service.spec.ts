import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should returns the sum between two numbers', () => {
    const result: number = service.calcular(1, 1, CalculadoraService.SOMA);
    expect(result).toEqual(2);
  })

  it('Should returns the subtraction between two numbers', () => {
    const result: number = service.calcular(1, 1, CalculadoraService.SUBTRACAO);
    expect(result).toEqual(0);
  })

  it('Should returns the multiplication between two numbers', () => {
    const result: number = service.calcular(2, 2, CalculadoraService.MULTIPLICACAO);
    expect(result).toEqual(4);
  })

  it('Should returns the division between two numbers', () => {
    const result: number = service.calcular(4, 2, CalculadoraService.DIVISAO);
    expect(result).toEqual(2);
  })

  it('Should returns 0 with no operation defined', () => {
    const result: number = service.calcular(4, 2, '%');
    expect(result).toEqual(0);
  })

  it('Should inject a service manually', inject([CalculadoraService], (service: CalculadoraService) => {
      const result = service.calcular(10, 10, CalculadoraService.SOMA);
      expect(result).toEqual(20);
    })
  )
});
