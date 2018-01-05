import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.initializeTabRoots();
  }

  private initializeTabRoots() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: 'Home',
        tabIcon: 'home'
      },
      {
        root: AboutPage,
        tabTitle: 'Contact',
        tabIcon: 'notifications'
      },
      {
        root: ContactPage,
        tabTitle: 'About',
        tabIcon: 'document'
      }
    ];
  }
}
