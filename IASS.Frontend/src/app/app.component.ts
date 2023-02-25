import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet *ngIf="!isIframe"></router-outlet>
  `,
})
export class AppComponent {
  isIframe = false;

  constructor() {
    this.isIframe = window !== window.parent && !window.opener;
  }
}
