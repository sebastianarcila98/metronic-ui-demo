import { Routes } from '@angular/router';
import { InvestmentCriteriaComponent } from './custom/investment-criteria/investment-criteria.component';
import { PropertyAnalysisListComponent } from './custom/property-analysis-list/property-analysis-list.component';
import { SavedPropertyListComponent } from './custom/saved-property-list/saved-property-list.component';
import { PropertyAnalysisComponent } from './custom/property-analysis/property-analysis.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./custom/custom.module').then((m) => m.CustomModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'builder',
    loadChildren: () => import('./builder/builder.module').then((m) => m.BuilderModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () => import('../modules/account/account.module').then((m) => m.AccountModule),
    // data: { layout: 'dark-header' },
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () => import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    // data: { layout: 'light-header' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () => import('../modules/widgets-examples/widgets-examples.module').then((m) => m.WidgetsExamplesModule),
    // data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () => import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'apps/users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'apps/roles',
    loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'apps/permissions',
    loadChildren: () => import('./permission/permission.module').then((m) => m.PermissionModule),
  },
  {
    path: 'investment-criteria',
    component: InvestmentCriteriaComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'properties/analyses',
    component: PropertyAnalysisListComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'properties/saved',
    component: SavedPropertyListComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: 'properties/:id',
    component: PropertyAnalysisComponent,
    data: { layout: 'light-sidebar' },
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
