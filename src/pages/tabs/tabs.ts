import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { AboutPage } from '../about/about';

import { tabRoot } from './tabRoot';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: tabRoot[];

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
        root: SettingPage,
        tabTitle: 'Setting',
        tabIcon: 'person'
      }
    ];
  }
}
