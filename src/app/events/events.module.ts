import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventsService } from './events.service';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports: [
    EventsComponent
  ],
  providers: [EventsService],
  bootstrap: []
})
export class EventsModule { }
