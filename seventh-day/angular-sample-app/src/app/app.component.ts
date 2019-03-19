import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})//decorator
export class AppComponent {
  recObj: {}
  title = 'angular-sample-app';

  selectedColor : DropEvent = {} as DropEvent

  jmbFn(evObj: {}) {
    this.recObj = evObj
  }

  onColorPicked(ev : DropEvent) {
    this.selectedColor = ev
  }
}

export interface DropEvent {
  position: number
  color: string
}