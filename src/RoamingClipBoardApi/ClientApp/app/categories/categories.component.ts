import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from '../shared/categoryDataService';
import { getCalendarFormat } from 'ngx-bootstrap/chronos/moment/calendar';

@Component({
    selector: 'roamclip-categories',
    templateUrl: './categories.component.html'
})
export class CategoriesComponent implements OnInit {
    constructor(private data: CategoryDataService) {
    }

    tableHeader: string = 'Clipboard Categories';
    public categories = [];

    ngOnInit(): void {
        this.getCategories().catch(() => { });
        };

    async getCategories() {
        await this.data.loadCategories();
        this.categories = this.data.categories;
    }
}

