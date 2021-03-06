import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-progress',
  template: `
  <div class="row jumbotron">
    <div class="col-md-12">
      <div class="progress">
        <div class="progress-bar" role="progressbar" [style.width]="progress" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{progress}}</div>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class MyProgressComponent implements OnInit {

  progress: string= '0%'
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
    this.data.onProgress(prg => {
      this.progress = `${prg}%`
      console.log(this.progress)
    })
  }
}
