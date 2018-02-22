import { Component, OnInit } from '@angular/core';
import { LinkDataService } from '../shared/linkDataService';
import { FormControl } from '@angular/forms';
import { Category } from '../../Models/catergory';
import { Router } from '@angular/router';
import { Link } from '../../Models/link';
import { CategoryDataService } from '../shared/categoryDataService';

@Component({
    selector: 'roamclip-addCategory',
    templateUrl: './addLink.component.html'
})
export class AddLinkComponent implements OnInit {

    pageTitle: string = 'Add new link';
    categories: Category[];
    selectedCategory: Category;

    constructor(
        private linkDs: LinkDataService,
        private categoryDs: CategoryDataService,
        private router: Router) {
    }

    // If you don't want to have to specify all of the properties as part of the constructor
    // you can make them optional in the model using "?"
    link: Link = new Link("",null,null,"Url","","Description",
        new Date(), new Date());

    // I don't normally see a Cancel button defined with type=submit.
    // Rather, the cancel is set to type=button and it uses a routerLink to navigate back.
    isAddAction: boolean = false;

    async onSubmit(form: any) {
        console.log('you submitted value:', form);
        console.log('isAddAction is', this.isAddAction);
        console.log('link: Url', this.link.urlString);
        console.log('link: Description', this.link.description);
        this.link.category = this.selectedCategory;
        var t = await this.linkDs.postLink(this.link);
        //console.log('putCategory', t);
        //this.router.navigate(['/links'])
    }

    async ngOnInit() {
        this.categories = await this.categoryDs.loadCategoriesAsync();
        if (this.categories.length > 0) {
            this.selectedCategory = this.categories[0];
        }
    }

    // Performing the save using Observables
    saveCategory(): void {
        // this.data.saveCategory(this.category).subscribe(
        // () => this.router.navigate(['/categories'])
        //);
    }
}

