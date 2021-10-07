import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks!: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listAll();
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

  remove($event:any, task: Task):void {
      $event.preventDefault();
      if(confirm('Do you want remove task "' + task.name + '"?')){
        let id = task.id;
        if(id !== undefined){
          this.taskService.delete(id);
        }
        this.tasks = this.listAll();
      }
  }

  updateStatus(task: Task): void {
    if(confirm('Do you want update task "' + task.name + '" status?')){
      let id = task.id;
      if(id !== undefined){
        this.taskService.updateStatus(id);
      }
      this.tasks = this.listAll();
    }
  }

}
