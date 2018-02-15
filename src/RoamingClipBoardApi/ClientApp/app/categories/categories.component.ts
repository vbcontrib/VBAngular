import { Component } from '@angular/core';

@Component({
    selector: 'roamclip-categories',
    templateUrl: './categories.component.html'
})
export class CategoriesComponent {
    pageTitel: string = 'Clipboard Categories';
}

export class CategoriesMock {
    public categories = [{
        description: "Car related",
        lastUsed: "2018-02-15",
        linkCount: 9
    }, {
            description: "Azure",
            lastUsed: "2018-02-15",
            linkCount: 13
        }, {
            description: "Commodore 64",
            lastUsed: "2018-02-11",
            linkCount: 7
        }, {
            description: "Visual Basic",
            lastUsed: "2018-02-16",
            linkCount: 11
        }, {
            description: ".NET",
            lastUsed: "2018-02-16",
            linkCount: 5
        }, {
            description: "C#",
            lastUsed: "2017-12-24",
            linkCount: 2
        }
    ]
}