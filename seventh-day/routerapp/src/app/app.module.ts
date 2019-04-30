import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ProfleComponent } from './dashboard/profle/profle.component';
import { FriendsComponent } from './dashboard/friends/friends.component';
import { FormsComponent } from './forms/forms.component';
import { TdComponent } from './forms/td/td.component';
import { DdComponent } from './forms/dd/dd.component';
import { PipeComponent } from './pipe/pipe.component';
import { XSpacePipe } from './pipe/x-space.pipe';
import { MobFlPipe } from './pipe/mob-fl.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    ProfleComponent,
    FriendsComponent,
    FormsComponent,
    TdComponent,
    DdComponent,
    PipeComponent,
    XSpacePipe,
    MobFlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
