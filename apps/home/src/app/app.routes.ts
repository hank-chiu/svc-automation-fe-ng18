import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () => import('Pages/login').then((m) => m.LoginRoutingModule),
  },
  {
    path: 'rule-list',
    loadChildren: () =>
      import('Pages/rule-list').then((m) => m.RuleListRoutingModule),
  },
];
