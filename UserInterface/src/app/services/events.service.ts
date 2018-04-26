import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { Events } from '../models/events';

@Injectable()
export class EventsService {
  events: Events[];

  url = 'http://localhost:3000/events';
  constructor(private http: HttpClient) { }

  getEventsByDate() {
    return this.http.get<EventResponse>(this.url)
      .pipe(map(data => {
        this.events = data.obj.slice();
        return this.events;
      }), catchError(
        error => _throw(error.error)
      ));
  }
}

interface EventResponse {
  msg: string;
  obj: Array<Events>;
}
