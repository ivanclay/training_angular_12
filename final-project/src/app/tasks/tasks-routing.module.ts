import { Routes } from "@angular/router";
import { TaskListComponent } from "./list";
import { AddTaskComponent } from "./add";
import { EditTaskComponent } from "./edit";

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'
  },
  {
    path: 'tasks/list',
    component: TaskListComponent
  },
  {
    path: 'tasks/add',
    component: AddTaskComponent
  },
  {
    path: 'tasks/edit/:id',
    component: EditTaskComponent
  }

];
