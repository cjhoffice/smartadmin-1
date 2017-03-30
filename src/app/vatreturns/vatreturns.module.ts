import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { VatReturnsComponent } from './vatreturns.component';
import { routing } from './vatreturns.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    VatReturnsComponent
  ]
})
export class VatReturnsModule {} 