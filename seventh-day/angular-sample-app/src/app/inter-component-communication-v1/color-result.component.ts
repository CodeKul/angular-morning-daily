import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-result',
  template: `
    <div class="box" [style.background]="myColor">
    </div>
  `,
  styles: [`
    .box {
      width : 300px;
      height : 300px;
      background-color : #ccc;
    }
  `]
})
export class ColorResultComponent implements OnInit {

  @Input()
  myColor : string

  constructor() { }

  ngOnInit() {
  }
}
