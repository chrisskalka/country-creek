import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PicturePageComponent } from './picturePage.component';
import { PicturePageRoutingModule } from './picturePage.route';
import { FooterModule } from '../footer/footer.module';
import { PicturesModule } from '../pictures/pictures.module';
import { EventsModule } from '../events/events.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { ImageService } from './image.service';

@NgModule({
    declarations: [
        PicturePageComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        PicturePageRoutingModule,
        PicturesModule,
        FooterModule,
        EventsModule,
        MatTabsModule,
        MatDividerModule
    ],
    exports: [
        PicturePageComponent
    ],
    providers: [ImageService],
    bootstrap: []
})
export class PicturePageModule { }
