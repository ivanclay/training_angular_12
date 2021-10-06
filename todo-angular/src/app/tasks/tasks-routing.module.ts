import { Routes } from "@angular/router";
import { TaskListComponent } from "./list";

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'
  },
  {
    path: 'tasks/list',
    component: TaskListComponent
  }

];
