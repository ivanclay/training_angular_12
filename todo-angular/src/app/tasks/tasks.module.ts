import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskService } from './shared';
import { TaskListComponent } from './list';



@NgModule({
  declarations: [
    TaskListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [TaskService]
})
export class TasksModule { }
