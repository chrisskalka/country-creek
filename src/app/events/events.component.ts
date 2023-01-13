import { Component, OnInit } from '@angular/core';
import { Events } from './events.model';
import { EventsService } from './events.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  eventData: Events[] = [];
  // public eventData = [{
  //   date: new Date('12-21-2022'),
  //   title: 'Fishing',
  //   desc: 'Come fishing at the ponds'
  // },
  // {
  //   date: new Date('12-26-2022'),
  //   title: 'Sky diving',
  //   desc: 'Jump out of planes'
  // },
  // {
  //   date: new Date('12-21-2022'),
  //   title: 'Fishing',
  //   desc: 'Come fishing at the ponds'
  // },
  // {
  //   date: new Date('12-26-2022'),
  //   title: 'Sky diving',
  //   desc: 'Jump out of planes'
  // },
  // {
  //   date: new Date('12-21-2022'),
  //   title: 'Fishing',
  //   desc: 'Come fishing at the ponds'
  // },
  // {
  //   date: new Date('12-26-2022'),
  //   title: 'Sky diving',
  //   desc: 'Jump out of planes'
  // }];

   constructor(private eventSvc: EventsService) { }

  ngOnInit(): void {
    this.eventSvc.getEvents().subscribe(resp => {
      this.eventData = resp;
    })
  }


}
