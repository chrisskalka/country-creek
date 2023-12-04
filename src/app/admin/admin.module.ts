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
import { MatTableModule } from '@angular/material/table';
import { UserService } from './user.service';
import { FaqService } from '../faq/faq.service';
import { NgxEditorModule } from 'ngx-editor';
import { ContactService } from '../contacts/contacts.service';
import { ImageService } from '../picturePage/image.service';

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
    MatDividerModule,
    MatTableModule,
    NgxEditorModule.forRoot({
      locals: {
        // menu
        bold: 'Bold',
        italic: 'Italic',
        code: 'Code',
        blockquote: 'Blockquote',
        underline: 'Underline',
        strike: 'Strike',
        bullet_list: 'Bullet List',
        ordered_list: 'Ordered List',
        heading: 'Heading',
        h1: 'Header 1',
        h2: 'Header 2',
        h3: 'Header 3',
        h4: 'Header 4',
        h5: 'Header 5',
        h6: 'Header 6',
        align_left: 'Left Align',
        align_center: 'Center Align',
        align_right: 'Right Align',
        align_justify: 'Justify',
        text_color: 'Text Color',
        background_color: 'Background Color',

        // popups, forms, others...
        url: 'URL',
        text: 'Text',
        openInNewTab: 'Open in new tab',
        insert: 'Insert',
        altText: 'Alt Text',
        title: 'Title',
        remove: 'Remove',
      },
    }),
  ],
  exports: [
    AdminComponent
  ],
  providers: [
    EventsService,
    PicturesService,
    UserService,
    FaqService,
    ContactService,
    ImageService
  ],
  bootstrap: []
})
export class AdminModule { }