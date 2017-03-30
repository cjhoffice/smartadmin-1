import { Routes, RouterModule }  from '@angular/router';
import { TasksComponent } from './tasks.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent
  }
];

export const routing = RouterModule.forChild(routes);