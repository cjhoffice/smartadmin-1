import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ExpensesComponent } from './expenses.component';
import { routing } from './expenses.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ExpensesComponent
  ]
})
export class ExpensesModule {}