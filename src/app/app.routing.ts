import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from '../app/service/auth-guard.service';
// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { OpenFileComponent } from './views/chat/open-file/open-file.component';

export const routes: Routes = [
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'openfile',
    component: OpenFileComponent,
    data: {
      title: 'Open File'
    },
    canActivate:[AuthGaurdService],
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate:[AuthGaurdService],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'chat/:idGrupo',
        loadChildren: () => import('./views/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path: 'createGroup',
        loadChildren: () => import('./views/create-group/create-group.module').then(m => m.CreateGroupModule)
      },
      {
        path: 'editGroup/:idGrupo',
        loadChildren: () => import('./views/edit-group/edit-group.module').then(m => m.EditGroupModule)
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
