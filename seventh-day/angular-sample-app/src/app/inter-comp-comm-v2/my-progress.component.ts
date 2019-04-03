import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-progress',
  template: `
  <div class="row jumbotron">
    <div class="col-md-12">
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class MyProgressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
