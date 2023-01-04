import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  exports:[
    AdminComponent
  ],
  providers: [],
  bootstrap: []
})
export class AdminModule { }
