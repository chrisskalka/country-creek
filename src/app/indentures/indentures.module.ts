import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../footer/footer.module';
import { PicturesModule } from '../pictures/pictures.module';
import { EventsModule } from '../events/events.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { IndenturesComponent } from './indentures.component';
import { IndenturesRoutingModule } from './indentures.route';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
    declarations: [
        IndenturesComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        PicturesModule,
        FooterModule,
        EventsModule,
        MatTabsModule,
        MatDividerModule,
        IndenturesRoutingModule,
        PdfViewerModule
    ],
    exports: [
        IndenturesComponent
    ],
    providers: [],
    bootstrap: []
})
export class IndenturesModule { }
