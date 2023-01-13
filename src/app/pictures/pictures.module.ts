import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PicturesComponent } from './pictures.component';
import { PicturesService } from './pictures.service';

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
    providers: [PicturesService],
    bootstrap: []
})
export class PicturesModule { }
