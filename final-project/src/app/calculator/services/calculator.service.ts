import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class CalculatorService {

  static readonly ADD: string = '+';
  static readonly SUBTRACT: string = '-';
  static readonly DIVIDE: string = '/';
  static readonly MULTIPLY: string = '*';

  constructor() { }

  calcule(num1:number, num2:number,operator:string): number {
    let result: number;

    switch(operator) {
      case CalculatorService.ADD:
        result = num1 + num2;
      break;
      case CalculatorService.SUBTRACT:
        result = num1 - num2;
      break;
      case CalculatorService.MULTIPLY:
        result = num1 * num2;
      break;
      case CalculatorService.DIVIDE:
        result = num1 / num2;
      break;
      default:
        result = 0;
    }

    return result;
  }
}
