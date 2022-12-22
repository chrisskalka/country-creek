import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports:[
    EventsComponent
  ],
  providers: [],
  bootstrap: []
})
export class EventsModule { }
