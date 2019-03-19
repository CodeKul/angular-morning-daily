import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-jumbo',
  templateUrl: './my-jumbo.component.html',
  styleUrls: ['./my-jumbo.component.css']
})
export class MyJumboComponent implements OnInit {

  @Input()
  ttl : string;

  @Input()
  infTxt : string;

  @Input()
  acTxt : string

  @Output()
  more : EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  lnMr() {
    let infoObj = {
      infTtl : this.ttl,
      infTxt :this.infTxt,
      acTxt : this.acTxt
    }
    this.more.emit(infoObj)
  }
}
