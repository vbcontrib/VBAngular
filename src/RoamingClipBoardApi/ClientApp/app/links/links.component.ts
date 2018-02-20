import { Component, OnInit } from '@angular/core';
import { LinkDataService } from '../shared/linkDataService';

import { Link } from '../../Models/link';

@Component({
    selector: 'roamclip-links',
    templateUrl: './links.component.html'
})
export class LinksComponent implements OnInit {
    tableHeader: string = 'Clipboard Links';
    links: Link[];

    constructor(private data: LinkDataService) {
    }

    ngOnInit(): void {
        this.data.loadLinks().
            subscribe((result) => {

                if (result) {
                    this.links = result;
                }
                else {

                    //this.links = [{
                    //    link: "https://suchen.mobile.de/fahrzeuge/search.html?damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&maxPowerAsArray=PS&minPowerAsArray=PS&scopeId=C&transmissions=AUTOMATIC_GEAR",
                    //    description: "Search for classing Mercedes W123 280 SE",
                    //    categoryName: "Car related",
                    //    bestBefore: "2018-04-30"
                    //}, 
                    //{
                    //    link: "https://suchen.mobile.de/fahrzeuge/details.html?id=252201547&damageUnrepaired=NO_DAMAGE_UNREPAIRED&isSearchRequest=true&makeModelVariant1.makeId=17200&makeModelVariant1.modelDescription=se&makeModelVariant1.modelId=134&maxFirstRegistrationDate=1980-12-31&pageNumber=1&scopeId=C&transmissions=AUTOMATIC_GEAR&action=topOfPage&top=3:3&searchId=94d62f01-b49f-344c-6a46-d8126b301948",
                    //    description: "Classic Red Mercedes 280SE",
                    //    categoryName: "car related",
                    //    bestBefore: "2018-04-30"
                    //}]
                }
            })
    }
}

