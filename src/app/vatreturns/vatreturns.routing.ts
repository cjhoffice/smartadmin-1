import { Routes, RouterModule }  from '@angular/router';
import { VatReturnsComponent } from './vatreturns.component';

const routes: Routes = [
  {
    path: '',
    component: VatReturnsComponent
  }
];

export const routing = RouterModule.forChild(routes);