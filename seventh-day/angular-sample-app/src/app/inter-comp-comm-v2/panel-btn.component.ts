import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-btn',
  template: `
  <div class="row">
    <div class="col-md-12">
      <input (click)="clk(1)" type="button" class="btn btn-primary" value="Plus">
      <input (click)="clk(2)" type="button" class="btn btn-primary" value="Minus">
    </div>
  </div>
  `,
  styles: []
})
export class PanelBtnComponent implements OnInit {

  constructor(
    private data : DataService
  ) { }

  ngOnInit() {
  }

  clk(wh: number) {
    if (wh == 1) {
      // plus click
      this.data.incEm()
    } else {
      // minus click
      this.data.decEm()
    }
  }
}
