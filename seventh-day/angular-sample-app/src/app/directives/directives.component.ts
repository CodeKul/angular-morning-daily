import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  sh: boolean = false

  myCls = {
    alert: true,
    'alert-info': true
  }

  mobs = [
    { cmp: 'Android', pz: 5 },
    { cmp: 'Apple', pz: 6 },
    { cmp: 'BB', pz: 9 },
    { cmp: 'Moto', pz: 10 },
    { cmp: 'HTC', pz: 89 },
    { cmp: 'Nokia', pz: 50 },
    { cmp: 'Windows', pz: 56 }
  ]

  constructor() { }

  ngOnInit() {
  }

  onDrpClick(sh: boolean) {
    this.sh = sh
  }
}
