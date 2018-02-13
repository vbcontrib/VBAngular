import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      AlertModule.forRoot(),
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
