import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td',
  templateUrl: './td.component.html',
  styleUrls: ['./td.component.css']
})
export class TdComponent implements OnInit {

  emlRegx = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"

  prePopulatedData = {
    name: 'Android',
    eml: 'anidroid@gmail.com',
    pass: 'android'
  }

  constructor() { }

  ngOnInit() {
  }

  mySub(frm: NgForm) {
    console.log(frm)
    console.log(frm.value)
  }
}
