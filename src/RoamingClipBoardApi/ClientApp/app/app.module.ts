import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { DataService } from './shared/dataService';
import { HttpBackend } from '@angular/common/http/src/backend';

const appRoutes: Routes = [
    { path: 'app/index', redirectTo: 'ClientApp/dist/index.html', pathMatch: 'full' }
];

@NgModule({
  declarations: [
      AppComponent,
      CategoriesComponent
  ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }),

      AlertModule.forRoot(),
      BrowserModule,
      HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
