import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoutes } from './dashboard';
import { CalculatorRoutes } from './calculator/calculator-routing.module';
import { ConverterRoutes } from './converter/converter-routing.module';
import { TaskRoutes } from './tasks/tasks-routing.module';
import { TicTacToeRoutes } from './tictactoe/tictactoe-routing.module';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...CalculatorRoutes,
  ...ConverterRoutes,
  ...TaskRoutes,
  ...TicTacToeRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
