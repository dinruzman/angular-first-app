import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { WelcomePage } from './app-pages/welcomes/welcome/welcome.page'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () => import('./app-pages/welcomes/welcome/welcome.page').then((m) => m.WelcomePage),
    // children: [
    //   {
    //     path: 'tab1',
    //     loadComponent: () =>
    //       import('./tab1/tab1.page').then((m) => m.Tab1Page),
    //   },
    //   {
    //     path: 'tab2',
    //     loadComponent: () =>
    //       import('./tab2/tab2.page').then((m) => m.Tab2Page),
    //   },
    //   {
    //     path: 'tab3',
    //     loadComponent: () =>
    //       import('./tab3/tab3.page').then((m) => m.Tab3Page),
    //   }
    // ],
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then((m) => m.Tab3Page),
      }
    ],
  }
];
