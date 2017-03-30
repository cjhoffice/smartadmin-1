import {Component, OnInit} from '@angular/core';
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'jcrop-fields',
  template: `
    
    <jcrop-field *ngFor="let field of fields" [field]="field" [storeId]="storeId"></jcrop-field> 
    
  `,
  styles: []
})
export class FieldsComponent implements OnInit {

  fields = ['x', 'y', 'x2', 'y2'];

  @Input() storeId: string;

  constructor() {
  }

  ngOnInit() {
  }

}
