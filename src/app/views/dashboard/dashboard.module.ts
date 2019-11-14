import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CommonModule} from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardClassComponent } from './card-class/card-class.component';
import { ContainerMateriaCardComponent } from './container-materia-card/container-materia-card.component';
import { DataViewModule } from 'primeng/dataview';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ToastModule} from 'primeng/toast';


@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    BsDropdownModule,
    DataViewModule,
    CommonModule,
    ButtonsModule.forRoot(),
    ConfirmDialogModule,
    ToastModule
  ],
  declarations: [ DashboardComponent, CardClassComponent, ContainerMateriaCardComponent ]
})
export class DashboardModule { }
