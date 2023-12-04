import { Component, OnInit } from '@angular/core';
import { ContactService } from './contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contactInfo: string = '';

  constructor(private contactSvc: ContactService) {

  }

  ngOnInit(): void {
    this.contactSvc.getContactInfo().subscribe(response => {
      this.contactInfo = response;
    })
  }

}
