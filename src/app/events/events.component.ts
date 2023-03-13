import { Component, HostListener, OnInit } from '@angular/core';
import { Event } from './events.model';
import { EventsService } from './events.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  eventData: Event[] = [];
  public noCols: number = 2;
  public gridRowHeight: number = 150;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 1382) {
      this.noCols = 1;
    } else {
      this.noCols = 2;
    }

    if (event.target.innerWidth <= 765) {
      this.gridRowHeight = 255;
    }
  }

  constructor(private eventSvc: EventsService) { }

  ngOnInit(): void {

    if (window.screen.width <= 1382) {
      this.noCols = 1;
    }


    if (window.screen.width <= 765) {
      this.gridRowHeight = 355;
    }

    this.eventSvc.getEvents().subscribe(resp => {
      this.eventData = [];
      resp.forEach((event) => {
        var newEvent: Event = new Event();
        newEvent.id = event.Id;
        newEvent.date = new Date(event.Date);
        newEvent.title = event.Title;
        newEvent.description = event.Description;
        this.eventData.push(newEvent);
      })
      var temp = 1;
    })
  }


}
