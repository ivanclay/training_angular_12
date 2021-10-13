import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brDate'
})
export class BrDatePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(dateEn: string): string {
    if (!dateEn) {
           return '';
       }

       const dataArr = dateEn.split('-');

       if (dataArr.length !== 3) {
           return dateEn;
       }

       return dataArr[2] + '/' + dataArr[1] + '/' + dataArr[0];
 }
}
