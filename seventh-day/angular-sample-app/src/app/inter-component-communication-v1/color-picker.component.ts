import { Component, OnInit, Output, EventEmitter,ElementRef, ViewChild } from '@angular/core';
import { DropEvent } from '../app.component';

@Component({
  selector: 'app-color-picker',
  template: `
  <div class="dropdown" (click)="toggleSh()" #drp>
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"  [class.show]="isSh">
      <a class="dropdown-item" (click)="pickOne(1)">Red</a>
      <a class="dropdown-item" (click)="pickOne(2)">Green</a>
      <a class="dropdown-item" (click)="pickOne(3)">Blue</a>
    </div>
  </div>
  <div>
    <input type="text" #myNm/>
  </div>
  `,
  styles: []
})
export class ColorPickerComponent implements OnInit {

  isSh : boolean = false
  @ViewChild('myNm')
  private myNm : ElementRef<any>

  @ViewChild('drp')
  private slkvjlksdvj : ElementRef<any>

  @Output()
  picked: EventEmitter<DropEvent> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  toggleSh() {
    this.isSh = !this.isSh
    console.log(this.slkvjlksdvj)

    if(this.isSh) {
      this.slkvjlksdvj.nativeElement.className = 'dropdown show'
    }else {
      this.slkvjlksdvj.nativeElement.className = 'dropdown'
    }
  }

  pickOne(pos: number) {
    console.log(this.myNm)
    let evObj: DropEvent = {} as DropEvent
    evObj.position = pos
    if (pos == 1) {
      evObj.color = 'red'
    } else if (pos == 2) {
      evObj.color = 'green'
    }else {
      evObj.color = 'blue'
    }

    this.picked.emit(evObj)
  }
}


