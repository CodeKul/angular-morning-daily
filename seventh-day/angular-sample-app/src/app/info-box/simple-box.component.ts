import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-box',
  template: `
    <div class="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
  `,
  styles: [` 
    
  `]
})
export class SimpleBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
