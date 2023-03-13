import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FaqRoutingModule } from './faq.route';
import { FooterModule } from '../footer/footer.module';
import { PicturesModule } from '../pictures/pictures.module';
import { EventsModule } from '../events/events.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { FaqComponent } from './faq.component';
import { FaqService } from './faq.service';

@NgModule({
    declarations: [
        FaqComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        FaqRoutingModule,
        PicturesModule,
        FooterModule,
        EventsModule,
        MatTabsModule,
        MatDividerModule
    ],
    exports: [
        FaqComponent
    ],
    providers: [FaqService],
    bootstrap: []
})
export class FaqModule { }
