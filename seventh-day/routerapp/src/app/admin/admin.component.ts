import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  usrNm: string = 'sample'
  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRt.params.subscribe((prms: any) => {
      this.usrNm = prms['usr']
      console.log(this)
      console.log(prms)
    })

    this.actRt.queryParams.subscribe(prms => {
      console.log(prms)
    })
  }
}
