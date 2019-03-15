import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})//decorator
export class AppComponent {
  title = 'angular-sample-app';

  jmbFn(ttl : string) {
    this.title = ttl
  }
}
