import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PicturesComponent } from './pictures.component';

@NgModule({
    declarations: [
        PicturesComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [
        PicturesComponent
    ],
    providers: [],
    bootstrap: []
})
export class PicturesModule { }
