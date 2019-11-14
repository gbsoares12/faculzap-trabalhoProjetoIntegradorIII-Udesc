import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {FullCalendarModule} from 'primeng/fullcalendar';
import { EditGroupComponent } from './edit-group.component';
import { EditGroupRoutingModule } from './edit-group-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule} from '@angular/common';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { ListboxModule } from 'primeng/listbox';
import {ToastModule} from 'primeng/toast';
import {FieldsetModule} from 'primeng/fieldset';


@NgModule({
  imports: [
    FormsModule,
    EditGroupRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FullCalendarModule,
    DataViewModule,
    ButtonsModule.forRoot(),
    CommonModule,
    VirtualScrollerModule,
    ListboxModule,
    ToastModule,
    FieldsetModule
  ],
  declarations: [ EditGroupComponent ],
})

export class EditGroupModule { }
