import { Routes, RouterModule }  from '@angular/router';
import { InvoicesComponent } from './invoices.component';

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent
  }
];

export const routing = RouterModule.forChild(routes);