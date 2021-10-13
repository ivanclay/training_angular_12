import { BrDatePipe } from './br-date.pipe';

describe('BrDatePipe', () => {
  it('create an instance', () => {
    const pipe = new BrDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar 2017-03-31 para 31/03/2017', () => {
    const pipe = new BrDatePipe();
    expect(pipe.transform('2017-03-31')).toEqual('31/03/2017');
  });

});
