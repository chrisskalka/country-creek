import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Events } from '../events/events.model';
import { EventsService } from '../events/events.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  minDate: Date = new Date();
  public eventData: Events[] = [];

  constructor(private eventSvc: EventsService) { }

  ngOnInit(): void {
    this.eventSvc.getEvents().subscribe(resp => {
      resp.forEach(event =>{
        var newEvent = new Events();
        newEvent.date = new Date(event.date);
        newEvent.description = event.description;
        newEvent.title = event.title;
        newEvent.id = event.id;
        this.eventData.push(newEvent);
      });
    })
  }

  public getTime(dateInput: Date): string{

    return formatDate(dateInput, 'shortTime', 'en', 'CST');
  }
}
