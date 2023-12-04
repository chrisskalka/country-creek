import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsComponent } from './contacts.component';
import { ContactsRoutingModule } from './contacts.route';
import { FooterModule } from '../footer/footer.module';
import { PicturesModule } from '../pictures/pictures.module';
import { EventsModule } from '../events/events.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { ContactService } from './contacts.service';

@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        FlexLayoutModule,
        ContactsRoutingModule,
        PicturesModule,
        FooterModule,
        EventsModule,
        MatTabsModule,
        MatDividerModule
    ],
    exports: [
        ContactsComponent
    ],
    providers: [ContactService],
    bootstrap: []
})
export class ContactsModule { }
