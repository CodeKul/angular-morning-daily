import { DataService } from './services/data.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { SimpleBoxComponent } from './info-box/simple-box.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { MyJumboComponent } from './my-jumbo/my-jumbo.component';
import { InterComponentCommunicationV1Component } from './inter-component-communication-v1/inter-component-communication-v1.component';
import { ColorPickerComponent } from './inter-component-communication-v1/color-picker.component';
import { ColorResultComponent } from './inter-component-communication-v1/color-result.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { DirectivesComponent } from './directives/directives.component';
import { DrpDirective } from './directives/drp.directive';
import { CtmStrDirective } from './directives/ctm-str.directive';
import { ServicesComponent } from './services/services.component';
import { InterCompCommV2Component } from './inter-comp-comm-v2/inter-comp-comm-v2.component';
import { MyProgressComponent } from './inter-comp-comm-v2/my-progress.component';
import { PanelBtnComponent } from './inter-comp-comm-v2/panel-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoBoxComponent,
    SimpleBoxComponent,
    DataBindingComponent,
    MyJumboComponent,
    InterComponentCommunicationV1Component,
    ColorPickerComponent,
    ColorResultComponent,
    LifecycleComponent,
    DirectivesComponent,
    DrpDirective,
    CtmStrDirective,
    ServicesComponent,
    InterCompCommV2Component,
    MyProgressComponent,
    PanelBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
