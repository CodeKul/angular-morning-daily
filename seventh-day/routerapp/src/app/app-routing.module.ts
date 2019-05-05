import { HttpComponent } from './http/http.component';
import { ObsComponent } from './obs/obs.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsComponent } from './forms/forms.component';
import { ProfleComponent } from './dashboard/profle/profle.component';
import { FriendsComponent } from './dashboard/friends/friends.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { AdminComponent } from './admin/admin.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { TdComponent } from './forms/td/td.component';
import { DdComponent } from './forms/dd/dd.component';

const dashRoutes: Routes = [
  { path: 'friend', component: FriendsComponent },
  { path: 'profile', component: ProfleComponent }
]

const formsRoutes: Routes = [
  { path: 'td', component: TdComponent },
  { path: 'dd', component: DdComponent }
]
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'admin/:usr', component: AdminComponent },
  {
    path: 'dash',
    component: DashboardComponent,
    children: dashRoutes
  },
  { path: 'forms', component: FormsComponent, children: formsRoutes },
  { path: 'pipe', component: PipeComponent },
  { path: 'obs', component: ObsComponent },
  { path: 'http', component: HttpComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
