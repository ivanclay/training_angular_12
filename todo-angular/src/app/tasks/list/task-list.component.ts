import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] | undefined;

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.listAll();
    // this.tasks = [
    //   new Task(1, "Task One", false),
    //   new Task(2, "Task Two", true),
    //   new Task(3, "Task Three", false),
    // ]
  }

  listAll(): Task[] {
    return this.taskService.listAll();
  }

}
