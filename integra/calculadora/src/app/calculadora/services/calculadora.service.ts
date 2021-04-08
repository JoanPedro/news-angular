import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  /**
   * Método que calcula uma operação matemática dado
   * dois números.
   * Suporta as operações soma, subtração, divisão,
   * e multiplicação.
   *
   * @param num1 number
   * @param num2 number
   * @param operacao string Operação a ser executada
   * @return number Resultado da operação
   */
   calcular(num1: number, num2: number, operacao: string): number {
  	switch(operacao) {
  	  case CalculadoraService.SOMA:
  	    return num1 + num2;
  	  case CalculadoraService.SUBTRACAO:
  	    return num1 - num2;
  	  case CalculadoraService.DIVISAO:
  	    return num1 / num2;
  	  case CalculadoraService.MULTIPLICACAO:
  	    return num1 * num2;
  	  default:
  	    return 0;
  	}
  }
}
