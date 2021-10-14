import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ConverterService } from '../services';
import { ResponseConversion, Conversion } from '../models';

@Component({
  selector: 'modal-quotation',
  templateUrl: './modal-quotation.component.html',
  styleUrls: ['./modal-quotation.component.css']
})
export class ModalQuotationComponent implements OnInit {

  @Input() id: string = '';
  @Input() responseConversion: ResponseConversion | undefined;
  @Input() conversion: Conversion = new Conversion();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private converterService: ConverterService) { }

  ngOnInit(): void {
  }

  newQuery(): void {
    this.onConfirm.emit();
  }

  get convertedValue(): string {
    if(this.responseConversion === undefined){
      return '0';
    }

    return (this.conversion.value! *
      this.responseConversion.rates[this.conversion.currencyTo!]).toFixed(2);
  }

  get quotationTo(): number {
    return this.converterService.conversionTo(
      this.responseConversion!, this.conversion
    );
  }

  get quotationFrom(): string {
    return this.converterService.conversionFrom(
      this.responseConversion!, this.conversion
    );
  }

  get quotationDate(): string {
    return this.converterService.dateConversion(
      this.responseConversion!);
  }

}
