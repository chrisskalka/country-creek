import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule
    ],
    exports: [
        FooterComponent
    ],
    providers: [],
    bootstrap: []
})
export class FooterModule { }
