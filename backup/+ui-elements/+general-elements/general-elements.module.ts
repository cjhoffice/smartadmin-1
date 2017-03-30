import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generalElementsRouting } from './general-elements.routing';
import {GeneralElementsComponent} from "./general-elements.component";
import {SmartadminModule} from "../../shared/smartadmin.module";
import {AccordionModule, CarouselModule} from "ng2-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    generalElementsRouting,
    SmartadminModule,
    AccordionModule.forRoot(),

    CarouselModule.forRoot(),
  ],
  declarations: [GeneralElementsComponent]
})
export class GeneralElementsModule { }
