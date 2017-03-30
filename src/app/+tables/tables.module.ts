import {NgModule} from '@angular/core';

import {SmartadminModule} from '../shared/smartadmin.module'

import {routing} from './tables.routing';

import {DatatablesShowcaseComponent} from "./+datatables-showcase/datatables-showcase.component";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";
import { DatatablesRestDemoComponent } from './+datatables-showcase/datatables-rest-demo.component';

@NgModule({
  declarations: [	
	DatatablesShowcaseComponent, DatatablesRestDemoComponent
  ],
  imports: [
    SmartadminModule,
    SmartadminDatatableModule,

    routing
  ],
})
export class TablesModule {}
