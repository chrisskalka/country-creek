import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.route';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTimepickerModule } from 'mat-timepicker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { EventsService } from 'src/app/events/events.service';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { PicturesService } from '../pictures/pictures.service';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    AdminRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTimepickerModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatNativeDateModule,
    FormsModule,
    MatDividerModule
  ],
  exports: [
    AdminComponent
  ],
  providers: [
    EventsService, 
    PicturesService
  ],
  bootstrap: []
})
export class AdminModule { }
