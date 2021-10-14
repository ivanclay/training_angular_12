import { Injectable } from '@angular/core';

import { Currency } from '../models';
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private currencys!: Currency[];

  constructor() { }

  private currencysObj = [ //http://fixer.io
    { "acronyms": "AUD", "description": "Dólar australiano" },
    { "acronyms": "BGN", "description": "Lev búlgaro" },
    { "acronyms": "BRL", "description": "Real brasileiro" },
    { "acronyms": "CAD", "description": "Dólar canadense" },
    { "acronyms": "CHF", "description": "Franco suíço" },
    { "acronyms": "CNY", "description": "Yuan Chinês" },
    { "acronyms": "CZK", "description": "Coroa República Tcheca" },
    { "acronyms": "DKK", "description": "Coroa dinamarquesa" },
    { "acronyms": "EUR", "description": "Euro" },
    { "acronyms": "GBP", "description": "Libra Esterlina" },
    { "acronyms": "HKD", "description": "Dólar de Hong Kong" },
    { "acronyms": "HRK", "description": "Coroa Croácia" },
    { "acronyms": "HUF", "description": "Florim húngaro" },
    { "acronyms": "IDR", "description": "Rupia indonésia" },
    { "acronyms": "ILS", "description": "Novo shekel israelense" },
    { "acronyms": "INR", "description": "Rupia indiana" },
    { "acronyms": "JPY", "description": "Iene japonês" },
    { "acronyms": "KRW", "description": "Won sul-coreano" },
    { "acronyms": "MXN", "description": "Peso mexicano" },
    { "acronyms": "MYR", "description": "Malásia Ringgit" },
    { "acronyms": "NOK", "description": "Coroa Noruega" },
    { "acronyms": "NZD", "description": "Dólar da Nova Zelândia" },
    { "acronyms": "PHP", "description": "Peso filipino" },
    { "acronyms": "PLN", "description": "Złoty Polónia" },
    { "acronyms": "RON", "description": "Leu romeno" },
    { "acronyms": "RUB", "description": "Belarus Ruble" },
    { "acronyms": "SEK", "description": "Coroa Suécia" },
    { "acronyms": "SGD", "description": "Dólar de Singapura" },
    { "acronyms": "THB", "description": "Baht Tailândia" },
    { "acronyms": "TRY", "description": "Lira turca" },
    { "acronyms": "USD", "description": "Dólar dos Estados Unidos" },
    { "acronyms": "ZAR", "description": "Rand África do Sul" }
    ];

    listAll(): Currency[] {
      if(this.currencys){
        return this.currencys;
      }

      this.currencys = [];

      for (let currencyObj of this.currencysObj) {
        let currency: Currency = new Currency();
        Object.assign(currency, currencyObj);
        this.currencys.push(currency);
      }

      return this.currencys;
    }
}
