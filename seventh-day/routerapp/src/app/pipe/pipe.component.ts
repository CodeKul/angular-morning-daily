import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  sal: number = 15
  nm = `android`
  dt = new Date()
  myObj = {
    dt: 'android',
    frm: new Date(),
    to: new Date()
  }
  fl: string

  mobs = [
    'android', 'apple', 'windows', 'black berry', 'samsung', 'dell', 'xyz'
  ]

  constructor() { }

  ngOnInit() {
  }

  addMob(mb: string) {
    this.mobs.push(mb)
  }
}
