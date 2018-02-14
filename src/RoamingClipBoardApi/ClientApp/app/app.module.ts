import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';


@NgModule({
  declarations: [
      AppComponent,
      CategoriesComponent
  ],
  imports: [
      AlertModule.forRoot(),
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
