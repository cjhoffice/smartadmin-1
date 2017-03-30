import {Component, OnInit} from '@angular/core';

import {NgRedux, select} from 'ng2-redux'
import {Input} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'image-editor-default-panel',
  template: `
            <section>
                <jcrop
                    [storeId]="storeId" 
                    src="assets/img/superbox/superbox-full-11.jpg"
                    [width]="600" [height]="400"></jcrop>
            </section>
`,
})
export class DefaultPanelComponent implements OnInit {


  public storeId = 'defaultPanel';

  @Input() active: boolean;

  constructor(private ngRedux: NgRedux<any>) {

  }

  ngOnInit() {

  }


}
