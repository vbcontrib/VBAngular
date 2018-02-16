import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/dataService';

@Component({
    selector: 'roamclip-categories',
    templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
    constructor(private data: DataService) {
    }

    tableHeader: string = 'Clipboard Categories';
    public categories = [];

    ngOnInit(): void {
        this.data.loadCategories().
            subscribe((result) => {

                if (result) {
                    this.categories = this.data.categories;
                }
                else {

                    //TODO: Don't hand out default entries, signal error instead.

                    this.categories = [{
                        categoryName: "Car related",
                        dateLastUsed: "2018-02-15",
                        linkCount: 9
                    }, {
                        categoryName: "Azure",
                        dateLastUsed: "2018-02-15",
                        linkCount: 13
                    }]
                }
            })
    }
}

