import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { InvoicesComponent } from './invoices.component';
import { routing } from './invoices.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    InvoicesComponent
  ]
})
export class InvoicesModule {}