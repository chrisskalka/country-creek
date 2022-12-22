import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  public eventData = [{
    date: new Date('12-21-2022'),
    title: 'Fishing',
    desc: 'Come fishing at the ponds'
  },
  {
    date: new Date('12-26-2022'),
    title: 'Sky diving',
    desc: 'Jump out of planes'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
