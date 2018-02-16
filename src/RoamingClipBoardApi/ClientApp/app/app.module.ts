import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { LinksComponent } from './links/links.component';
import { DataService } from './shared/dataService';
import { HttpBackend } from '@angular/common/http/src/backend';

const appRoutes: Routes = [
    { path: 'categories', component: CategoriesComponent},
    { path: 'links', component: LinksComponent},
    { path: '', redirectTo: 'links', pathMatch: 'full' }
];

@NgModule({
  declarations: [
      AppComponent,
      CategoriesComponent,
      LinksComponent
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
