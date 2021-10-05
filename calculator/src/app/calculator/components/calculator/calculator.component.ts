import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../../services';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  private number1:string = '';
  private number2:string = '';
  private result:number = 0;
  private operator:string = '';

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {
    this.limpar();
  }

  limpar(): void {
    this.number1 = '';
    this.number2 = '';
    this.result = 0;
    this.operator = '';
  }

  addNumbers(numb:string): void {
    if(this.operator === '') {
      this.number1 = this.concatNumber(this.number1, numb);
    }else{
      this.number2 = this.concatNumber(this.number2, numb);
    }
  }

  concatNumber(num:string, numConcat:string):string {
    if(num === '0' || num === null){
      num = '';
    }

    if(numConcat === '.' && num === ''){
      return '0.';
    }

    if(numConcat === '.' && num.indexOf('.') > -1) {
      return num;
    }
    return num + numConcat;
  }

  defineOperator(operator:string):void {
    if(this.operator === '' || this.operator === null){
      this.operator = operator;
      return;
    }

    if(this.number2 !== '') {
      this.result = this.calculatorService.calcule(
        parseFloat(this.number1),
        parseFloat(this.number2),
        this.operator);

        this.operator = operator;
        this.number1 = this.result.toString();
        this.number2 = '';
        this.result = 0;
    }
  }

  calcule(): void {
    if(this.number2 === ''){
      return;
    }

    this.result = this.calculatorService.calcule(
      parseFloat(this.number1),
      parseFloat(this.number2),
      this.operator);
  }

  get display(): string {
    if(this.result !== 0){
      return this.result.toString();
    }
    if(this.number2 !== ''){
      return this.number2;
    }
    return this.number1;
  }

}
