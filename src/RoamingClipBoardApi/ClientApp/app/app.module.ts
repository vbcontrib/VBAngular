import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpBackend } from '@angular/common/http/src/backend';
import { FormsModule } from '@angular/forms'

import { CategoriesComponent } from './categories/categories.component';
import { AddCategoryComponent } from './categories/addCategory.component';
import { LinksComponent } from './links/links.component';
import { CategoryDataService } from './shared/categoryDataService';
import { LinkDataService } from './shared/linkDataService';

const appRoutes: Routes = [
    { path: 'categories', component: CategoriesComponent},
    { path: 'addCategory', component: AddCategoryComponent },
    { path: 'links', component: LinksComponent},
    { path: '', redirectTo: 'links', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        CategoriesComponent,
        AddCategoryComponent,
        LinksComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true }),

        AlertModule.forRoot(),
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [
        CategoryDataService,
        LinkDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
