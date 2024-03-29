import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConverterComponent } from './components';
import { CurrencyService, ConverterService } from './services';
import { NumberDirective } from './directives';
import { ModalQuotationComponent } from './utils';
import { BrDatePipe } from './pipes';

@NgModule({
  declarations: [
    ConverterComponent,
    NumberDirective,
    ModalQuotationComponent,
    BrDatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ConverterComponent
  ],
  providers: [
    CurrencyService,
    ConverterService
  ]
})
export class ConverterModule { }
