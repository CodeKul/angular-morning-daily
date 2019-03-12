import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SimpleBoxComponent } from './info-box/simple-box.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    SimpleBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
