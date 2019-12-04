import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';


const routes: Routes = [{ path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
