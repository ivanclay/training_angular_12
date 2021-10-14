import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task, TaskService } from '../shared';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @ViewChild('formTask') formTask: NgForm | undefined;
  task!: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  add(): void {
    if (this.formTask?.form.valid){
      if(this.task !== undefined){
        this.taskService.addTask(this.task);
        this.router.navigate(["/tasks"]);
      }

    }
  }

}
