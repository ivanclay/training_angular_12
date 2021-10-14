import { inject, TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be 1 + 4 = 5', ()=> {
      inject([CalculatorService], (service: CalculatorService)=> {
        let soma = service.calcule(1,4,CalculatorService.ADD);
        expect(soma).toEqual(5);
      })
  });

  it('should be 1 - 4 = -3', ()=> {
    inject([CalculatorService], (service: CalculatorService)=> {
      let sub = service.calcule(1,4,CalculatorService.SUBTRACT);
      expect(sub).toEqual(-3);
    })
  });

  it('should be 1 * 4 = 4', ()=> {
    inject([CalculatorService], (service: CalculatorService)=> {
      let multi = service.calcule(1,4,CalculatorService.MULTIPLY);
      expect(multi).toEqual(4);
    })
  });

  it('should be 1 / 4 = 0.25', ()=> {
    inject([CalculatorService], (service: CalculatorService)=> {
      let divide = service.calcule(1,4,CalculatorService.DIVIDE);
      expect(divide).toEqual(0.25);
    })
  });

  it('should be 0 to invalid operation', ()=> {
    inject([CalculatorService], (service: CalculatorService)=> {
      let invalidOp = service.calcule(1,4,'%');
      expect(invalidOp).toEqual(0);
    })
  });

});
