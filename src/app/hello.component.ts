import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1> <iframe width="1000px" height="1000vh" frameBorder="0" [src]="urlSafe"></iframe>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
  url: string = "https://angular.io";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }
  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url+'/'+this.name);
  }
}
