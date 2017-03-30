import { Routes, RouterModule }  from '@angular/router';
import { TimesheetsComponent } from './timesheets.component';

const routes: Routes = [
  {
    path: '',
    component: TimesheetsComponent
  }
];

export const routing = RouterModule.forChild(routes);