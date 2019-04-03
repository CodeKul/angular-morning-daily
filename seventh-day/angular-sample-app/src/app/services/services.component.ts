import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  // providers: [DataService]
})
export class ServicesComponent implements OnInit {

  counter: number = 0

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
  }

  clk(wh: number) {
    if (wh == 1) {
      // plus click
      this.counter = this.dataService.inc()
    } else {
      // minus click
      this.counter = this.dataService.dec()
    }
  }
}
