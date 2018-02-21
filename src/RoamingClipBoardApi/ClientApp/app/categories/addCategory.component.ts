import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../shared/categoryDataService';
import { FormControl } from '@angular/forms';
import { Category } from '../../Models/catergory';
import { Router } from '@angular/router';

@Component({
    selector: 'roamclip-addCategory',
    templateUrl: './addcategory.component.html'
})
export class AddCategoryComponent {
    constructor(
        private data: CategoryDataService,
        private router: Router) {
    }

    pageTitle: string = 'Add new category';

    // If you don't want to have to specify all of the properties as part of the constructor
    // you can make them optional in the model using "?"
    category: Category = new Category("",
        "Test-Category", "Test description", null,
        new Date(), new Date(), new Date());

    // I don't normally see a Cancel button defined with type=submit.
    // Rather, the cancel is set to type=button and it uses a routerLink to navigate back.
    isAddAction: boolean = false;

    async onSubmit(form: any) {
        console.log('you submitted value:', form);
        console.log('isAddAction is', this.isAddAction);
        console.log('category: Name', this.category.categoryName);
        console.log('category: Description', this.category.categoryDescription);
        var t = await this.data.postCategory(this.category);
        console.log('putCategory', t);
        this.router.navigate(['/categories'])
    }

    // Performing the save using Observables
    saveCategory(): void {
        this.data.saveCategory(this.category).subscribe(
            () => this.router.navigate(['/categories'])
        );
    }
}

