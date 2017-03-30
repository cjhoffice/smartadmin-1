import {Component, OnInit, ElementRef, Input, AfterViewInit} from '@angular/core';

@Component({
  selector: 'sa-dygraph',
  template: `
    <div [ngStyle]="{width: width, height: height}" >
      dygraph canvas!
    </div>
  `,
  styles: []
})

export class DygraphComponent implements AfterViewInit, OnInit {

  @Input() options:any = {};
  @Input() data:any = {};
  @Input() width:string = '100%';
  @Input() height:string = '300px';

  constructor(private el:ElementRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // to improve latency for big components smartadmin app we are loading dependency async
    System.import('dygraphs').then((Dygraph)=> {
      new Dygraph(this.el.nativeElement.children[0], this.data, this.options)
    })
  }

}
