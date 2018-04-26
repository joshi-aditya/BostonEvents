import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../models/events';

@Component({
  selector: 'app-browse-events',
  templateUrl: './browse-events.component.html',
  styleUrls: ['./browse-events.component.scss']
})
export class BrowseEventsComponent implements OnInit {

  events: Events[] = [];
  endReached: boolean;
  start: number;
  limit: number;
  constructor(private eventsService: EventsService) {
    this.start = 0;
    this.limit = 5;
  }

  ngOnInit() {

    window.addEventListener('scroll', this.scroll, true);
    this.getEvents(this.start, this.limit);
  }

  scroll = (): void => {

    if ((window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 75)) {
      if (!this.endReached) {
        this.start += this.limit;

        this.getEvents(this.start, this.limit);
      }
    }
  }

  getEvents(start: number, limit: number) {
    this.eventsService.getEvents(start, limit)
      .subscribe(data => {

        data.forEach(element => {
          this.events.push(element);
        });

        if (!data) {
          this.endReached = true;
        } else if (!Array.isArray(data)) {
          this.endReached = true;
        } else if (Array.isArray(data) && data.length < this.limit) {
          this.endReached = true;
        } else if (data.length === this.limit) {
          this.endReached = false;
        }
      }, error1 => console.error(error1));
  }

}
