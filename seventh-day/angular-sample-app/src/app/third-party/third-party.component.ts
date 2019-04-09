import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-third-party',
  templateUrl: './third-party.component.html',
  styleUrls: ['./third-party.component.css']
})
export class ThirdPartyComponent implements OnInit {

  doClose = true
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  cls() {
    console.log(`Close Clicked`)
    this.doClose = !this.doClose
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true })
  }
}
