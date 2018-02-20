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
    category: Category = new Category("",
        "Test-Category", "Test description", null,
        new Date(), new Date(), new Date());
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
}

