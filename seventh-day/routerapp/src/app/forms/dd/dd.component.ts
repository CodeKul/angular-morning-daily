import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dd',
  templateUrl: './dd.component.html',
  styleUrls: ['./dd.component.css']
})
export class DdComponent implements OnInit {

  fg: FormGroup
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    let emlCmps = Validators.compose([
      Validators.required,
      Validators.email
    ])

    let usNmCmp = Validators.compose([
      Validators.required,
      this.startWithA
    ])

    this.fg = this.fb.group({
      usNm: this.fb.control('', usNmCmp),
      eml: this.fb.control('', emlCmps, this.startWithAasync),
      pass: this.fb.control('', Validators.required)
    })
    console.log(this.fg)
  }

  frmSub() {
    console.log(this.fg)
  }

  startWithA(ctrl: AbstractControl): ValidationErrors | null {
    console.log(`Full ${ctrl.value} --> ${ctrl.value.charAt(0)}`);

    if (ctrl.value.charAt(0) == 'a'
      || ctrl.value.charAt(0) == 'A') {
      return null
    }
    return {
      isA: true
    }
  }

  startWithAasync(ctrl: AbstractControl): Promise<ValidationErrors | null> {

    function promiseFn(res, rej) {
      function futureFn() {
        if (ctrl.value.charAt(0) == 'a'
          || ctrl.value.charAt(0) == 'A') {
          res(null)
        }
        else {
          let errObj = { isA: true }
          res(errObj)
        }
      }

      setTimeout(futureFn, 1500)
    }
    return new Promise(promiseFn)
  }
}
