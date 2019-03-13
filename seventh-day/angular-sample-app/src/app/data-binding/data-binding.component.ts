import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  exp = 10
  smTxt: string = 'codekul'
  typ = 'input'
  brd = '1px solid red'
  al : string

  constructor() { }

  myFn() {
    let dt = new Date()
    this.smTxt = dt.toString()
    console.log(dt.toString())
  }
  myAl(ty: number) {
    if(ty == 1) {
      // primary
      this.al = 'alert alert-primary'
    }else if(ty == 2) {
      //info
      this.al = 'alert alert-info'
    } else {
      // danger
      this.al = 'alert alert-danger'
    }
  }
}
