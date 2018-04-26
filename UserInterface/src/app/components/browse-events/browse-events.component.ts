import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
import {Events} from '../../models/events';

@Component({
  selector: 'app-browse-events',
  templateUrl: './browse-events.component.html',
  styleUrls: ['./browse-events.component.scss']
})
export class BrowseEventsComponent implements OnInit {

  events: Events[];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEventsByDate()
      .subscribe(data => {
        this.events = data;
      }, error1 => console.error(error1));
  }

}
