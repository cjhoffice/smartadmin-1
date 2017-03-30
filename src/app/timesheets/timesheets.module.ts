import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TimesheetsComponent } from './timesheets.component';
import { routing } from './timesheets.routing';

import {CalendarModule} from "../+calendar/calendar.module";

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    routing
  ],
  declarations: [
    TimesheetsComponent,
  ]
})
export class TimesheetsModule {}