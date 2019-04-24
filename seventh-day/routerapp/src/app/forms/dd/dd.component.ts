import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {

  fg : FormGroup
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      usNm : this.fb.control(['']),
      eml : this.fb.control(['']),
      pass : this.fb.control([''])
    })
    console.log(this.fg)
  }

  frmSub() {
    console.log(this.fg)
  }

}
