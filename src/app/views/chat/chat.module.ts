import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import {FullCalendarModule} from 'primeng/fullcalendar';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';
import { DataViewModule } from 'primeng/dataview';


@NgModule({
  imports: [
    FormsModule,
    ChatRoutingModule,
    ChartsModule,
    BsDropdownModule,
    FullCalendarModule,
    DataViewModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ChatComponent ]
})
export class ChatModule { }
