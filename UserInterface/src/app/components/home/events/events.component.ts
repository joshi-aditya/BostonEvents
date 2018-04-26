import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { Events } from '../../../models/events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events: Events[];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEventsByDate()
      .subscribe(data => {
        this.events = data.slice(0, 6);
        console.log(this.events);
      }, error1 => console.error(error1));
  }

}
