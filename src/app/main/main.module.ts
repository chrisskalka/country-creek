import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main.route';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [
        MainComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        MainRoutingModule,
        MatTabsModule
    ],
    exports: [
        MainComponent
    ],
    providers: [],
    bootstrap: []
})
export class MainModule { }
