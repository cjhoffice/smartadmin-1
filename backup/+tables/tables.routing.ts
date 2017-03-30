
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";

import {NormalTablesComponent} from "./+normal-tables/normal-tables.component";
import {DatatablesShowcaseComponent} from "./+datatables-showcase/datatables-showcase.component";
export const routes:Routes = [
  {
    path: 'normal',
    component: NormalTablesComponent,
    data: {pageTitle: 'Normal'}



  },
  {
    path: 'datatables',
    component: DatatablesShowcaseComponent,
    data: {pageTitle: 'Datatables'}

  }
];


export const routing = RouterModule.forChild(routes)
