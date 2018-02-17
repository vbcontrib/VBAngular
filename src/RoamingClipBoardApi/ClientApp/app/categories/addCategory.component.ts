import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../shared/categoryDataService';
import { FormControl } from '@angular/forms';
import { Category } from '../../Models/catergory';

@Component({
    selector: 'roamclip-addCategory',
    templateUrl: './addcategory.component.html'
})
export class AddCategoryComponent {
    constructor(private data: CategoryDataService) {
    }

    pageTitle: string = 'Add new category';
    category: Category = new Category("", "");
    isAddAction: boolean = false;

    onSubmit(form: any): void {
        console.log('you submitted value:', form);
        console.log('isAddAction is', this.isAddAction);
    }
}

