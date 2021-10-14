import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './dashboard';
import { CalculatorModule } from './calculator';
import { ConverterModule } from './converter';
import { TasksModule } from './tasks';
import { TictactoeModule } from './tictactoe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculatorModule,
    ConverterModule,
    TasksModule,
    TictactoeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
