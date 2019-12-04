import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyProtectedComponentComponent} from './my-protected-component/my-protected-component.component';
import {OktaAuthGuard, OktaCallbackComponent, OktaLoginRedirectComponent} from '@okta/okta-angular';
import {DashboardComponent} from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'protected',
    component: MyProtectedComponentComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'login',
    component: OktaLoginRedirectComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
