import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TictactoeComponent } from './tictactoe.component';



@NgModule({
  declarations: [
    TictactoeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TictactoeComponent
  ]
})
export class TictactoeModule { }
