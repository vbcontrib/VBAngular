import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DataService } from './shared/dataService';
import { HttpBackend } from '@angular/common/http/src/backend';

@NgModule({
  declarations: [
      AppComponent,
      CategoriesComponent
  ],
  imports: [
      AlertModule.forRoot(),
      BrowserModule,
      HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
