import { Component } from '@angular/core';

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
  pageTitle = 'The Roaming Clipboard!';
}
