import { Component, OnInit, ElementRef } from '@angular/core';

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
  al: string

  constructor() { }

  myFn() {
    let dt = new Date()
    this.smTxt = dt.toString()
    console.log(dt.toString())
  }
  myAl(ty: number) {
    if (ty == 1) {
      // primary
      this.al = 'alert alert-primary'
    } else if (ty == 2) {
      //info
      this.al = 'alert alert-info'
    } else {
      // danger
      this.al = 'alert alert-danger'
    }
  }
  myCh(evDt: any) {
    console.log(evDt)
    if (evDt.length < 10 || evDt.length > 10) {
      this.al = 'alert alert-danger'
    } else {
      this.al = 'alert alert-info'
    }
  }

  lclRf(el: any) {
    console.log(typeof el)
    el.style.border = '1px solid red'
  }
}
