import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  Conversion,
  ResponseConversion
} from '../models'

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  // private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3";
  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=f1ac211370a6f58860aa5a27355dd061";

  constructor(private http: HttpClient) { }

  converter(conversion: Conversion): Observable<any> {
  	let params = `&base=${conversion.currencyFrom}&symbols=${conversion.currencyTo}`;

  	return this.http
      .get<ResponseConversion>(this.BASE_URL + params)
  }

  conversionTo(responseConversion: ResponseConversion,
		conversion: Conversion): number {
  	if (responseConversion === undefined) {
  		return 0;
  	}

  	return responseConversion.rates[conversion.currencyTo!];
  }

  conversionFrom(responseConversion: ResponseConversion,
		conversion: Conversion): string {
  	if (responseConversion === undefined) {
  		return '0';
  	}

  	return (1 / responseConversion.rates[conversion.currencyTo!])
  		.toFixed(4);
  }

  dateConversion(responseConversion: ResponseConversion): string {
    if (responseConversion === undefined) {
      return '';
    }

    return responseConversion.date;
  }

}
