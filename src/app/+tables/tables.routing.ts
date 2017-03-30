
import {ModuleWithProviders} from "@angular/core"
import {RouterModule, Routes} from "@angular/router";

import {DatatablesShowcaseComponent} from "./+datatables-showcase/datatables-showcase.component";

export const routes:Routes = [
/*  {
    path: 'datatables',
    component: DatatablesShowcaseComponent,
    data: {pageTitle: 'Datatables'}

  }*/
];


export const routing = RouterModule.forChild(routes)
