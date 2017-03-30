import { Routes, RouterModule }  from '@angular/router';
import { ExpensesComponent } from './expenses.component';

const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent
  }
];

export const routing = RouterModule.forChild(routes);