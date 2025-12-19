import { Routes } from '@angular/router';
import { Page01 } from './page-01/page-01';
import { Page03 } from './page-03/page-03';
import { Page02 } from './page-02/page-02';
import { page01Routes } from './page-01/page01.routes';
import { page02Guard } from './page02-guard';
import { todoResolver } from './todo-resolver';

export const routes: Routes = [
  {
    path: 'page-01',
    component: Page01,
  },
  {
    path: 'page-02',
    loadComponent: () => import('./page-02/page-02').then((c) => c.Page02),
    canActivate: [page02Guard],
  },
  {
    path: 'page-03/:firstname',
    component: Page03,
  },
  {
    path: 'todo-detail/:id',
    component: TodoDetail,
    resolve: {
      todo: todoResolver,
    },
  },
  { path: '', redirectTo: '/page-01', pathMatch: 'full' },
  { path: '**', component: Page02 },
  ...page01Routes,
];
