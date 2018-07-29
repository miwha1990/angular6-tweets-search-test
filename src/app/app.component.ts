import { Component } from '@angular/core';

@Component({
  selector: 'ngwzp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public activeLinkIndex = 0;
  public navLinks = [
    {path: '/', label: 'Hashtag search'},
    {path: '/by-user', label: 'User search'}
  ];
  constructor() {
    this.navLinks.forEach((e, i) => {
      if (e.path === window.location.pathname) {
        this.activeLinkIndex = i;
      }
    });
  }
}
