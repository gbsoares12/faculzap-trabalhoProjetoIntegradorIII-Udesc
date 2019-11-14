import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGaurdService } from '../../service/auth-guard.service';
import { EditGroupComponent } from './edit-group.component';

const routes: Routes = [
  {
    path: '',
    component: EditGroupComponent,
    data: {
      title: 'Editar Grupo'
    },
    canActivate:[AuthGaurdService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EditGroupRoutingModule {}