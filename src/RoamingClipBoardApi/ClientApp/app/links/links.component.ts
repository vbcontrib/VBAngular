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

    constructor(private linkDs: LinkDataService) {
    }

    async ngOnInit() {
        try {
            this.links = await this.linkDs.loadLinksAsync();
        } catch (e) {

        }
    }
}

