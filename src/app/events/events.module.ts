import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EventsComponent } from './events.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EventsService } from './events.service';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    EventsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule
  ],
  exports: [
    EventsComponent
  ],
  providers: [EventsService],
  bootstrap: []
})
export class EventsModule { }
