import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './pages/login/login.component';
import {
  OKTA_CONFIG,
  OktaAuthModule
} from '@okta/okta-angular';
import { MyProtectedComponentComponent } from './my-protected-component/my-protected-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const oktaConfig  = {
  issuer: 'https://pyxisportal.okta.com//oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oa23dgmya7iu80Pa357',
  pkce: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyProtectedComponentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    OktaAuthModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: oktaConfig }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
