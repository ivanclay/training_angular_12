import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConverterService, CurrencyService } from '../services';

import { Currency, Conversion, ResponseConversion } from '../models';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  public currencys!: Currency[];
  public conversion!: Conversion;
  public hasError: boolean = false;
  public responseConversion!: ResponseConversion;

  @ViewChild('conversionForm') conversionForm: NgForm | undefined;

  constructor(
    private currencyService:  CurrencyService,
    private serviceConverter: ConverterService
  ) { }

  ngOnInit(): void {
    this.currencys = this.currencyService.listAll();
    this.init();
  }

  init(): void {
    this.conversion = new Conversion('USD', 'BRL', 0);
    this.hasError = false;
  }

  convert(): void {
    if(this.conversionForm?.form.valid){
      alert('Converting: ' + JSON.stringify(this.conversion));
    }
  }

}
