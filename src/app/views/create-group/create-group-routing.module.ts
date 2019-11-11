import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from '../../service/auth-guard.service';
import { CreateGroupComponent } from './create-group.component';

const routes: Routes = [
  {
    path: '',
    component: CreateGroupComponent,
    data: {
      title: 'Criar Grupo'
    },
    canActivate:[AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateGroupRoutingModule {}