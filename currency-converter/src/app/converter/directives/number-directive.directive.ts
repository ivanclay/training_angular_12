import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Directive({
  selector: '[numberDirective]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumberDirective,
    multi: true
  }]
})
export class NumberDirective implements ControlValueAccessor {

  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  writeValue(obj: any): void {
    this.el.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

    /**
   * Implements keyup event to directive element.
   *
   * @param any $event
   */
     @HostListener('keyup', ['$event'])
     onKeyUp($event: any) {
       let value = $event.target.value;
       let posDecimals = value.indexOf('.');

       value = value.replace(/[\D]/g, '');

       if (posDecimals > 0) {
        value = value.substr(0, posDecimals) + '.' +
        value.substr(posDecimals);
       }

       $event.target.value = value;
       this.onChange(value);
     }

}
