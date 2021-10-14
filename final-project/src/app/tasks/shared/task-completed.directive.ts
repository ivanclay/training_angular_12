import { ThisReceiver } from '@angular/compiler';
import {
    Directive,
    ElementRef,
    Input,
    OnInit
} from '@angular/core';

@Directive({
  selector: '[taskCompleted]'
})
export class TaskCompletedDirective implements OnInit{

  @Input() taskCompleted: boolean | undefined;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    let completed = this.taskCompleted;

    if(completed){
      this.el.nativeElement.style.textDecoration = "line-through";
    }
  }

}
