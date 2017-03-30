import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TasksComponent } from './tasks.component';

import {SmartadminModule} from '../shared/smartadmin.module'
import {DatatablesShowcaseComponent} from "../+tables/+datatables-showcase/datatables-showcase.component";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";
import { DatatablesRestDemoComponent } from '../+tables/+datatables-showcase/datatables-rest-demo.component';

import { routing } from './tasks.routing';

@NgModule({
	  declarations: [	
		DatatablesShowcaseComponent, DatatablesRestDemoComponent, TasksComponent
	  ],
	  imports: [
	    CommonModule,
	    SmartadminModule,
	    SmartadminDatatableModule,
	    routing
	  ],
})

export class TasksModule {}
