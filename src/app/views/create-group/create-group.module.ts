
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {FullCalendarModule} from 'primeng/fullcalendar';
import { CreateGroupComponent } from './create-group.component';
import { CreateGroupRoutingModule } from './create-group-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule} from '@angular/common';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { ListboxModule } from 'primeng/listbox';
import {ToastModule} from 'primeng/toast';


@NgModule({
  imports: [
    FormsModule,
    CreateGroupRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FullCalendarModule,
    DataViewModule,
    ButtonsModule.forRoot(),
    CommonModule,
    VirtualScrollerModule,
    ListboxModule,
    ToastModule
  ],
  declarations: [ CreateGroupComponent ],
})
export class CreateGroupModule { }
