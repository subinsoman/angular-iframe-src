import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'resources';
  url: string = "https://angular.io/api/router/RouterLink";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  
}
