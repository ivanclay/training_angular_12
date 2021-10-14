import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly data = [
    ['jan', 33],
    ['Feb', 68],
    ['Mar', 49],
    ['Apr', 15],
    ['jun', 80],
    ['jul', 27]
  ];

  constructor() { }

  getData(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.data);
      observable.complete();
    });
  }

}
