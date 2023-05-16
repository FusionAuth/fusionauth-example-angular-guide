import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FusionAuthModule } from '@fusionauth/angular-sdk';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FusionAuthModule.forRoot({
      clientId: 'e9fdb985-9173-4e01-9d73-ac2d60d1dc8f',
      serverUrl: 'http://localhost:9011',
      redirectUri: 'http://localhost:4200'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
