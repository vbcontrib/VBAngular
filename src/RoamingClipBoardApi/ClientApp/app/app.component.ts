import { Component } from '@angular/core';
import { CategoryDataService } from './shared/categoryDataService';
import { Router } from '@angular/router';

@Component({
  selector: 'roamclip-root',
  templateUrl: 'app.component.html'
  ,
    styles: [`
thead {
    color: #202020;
}`]
})
export class AppComponent {

    constructor(
        private data: CategoryDataService,
        private router: Router) {
    }

    pageTitle = 'The Roaming Clipboard';
    buttonContent = 'Create Demo Data';
    isButtonEnabled = 'btn btn-primary active';

    async onCreateDemoDataClick() {
        console.log("Create Demo Data.");
        await this.data.createDemoData();
        this.buttonContent = 'Demo-Data created.';
        this.isButtonEnabled = 'btn btn-primary disabled';
    }
}
