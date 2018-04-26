import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';
import { Events } from '../models/events';

@Injectable()
export class EventsService {
  events: Events[];

  url = 'http://localhost:3000/events';

  constructor(private http: HttpClient) {
  }

  getEventsByCategory(category: string) {
    return this.http.get<EventResponse>(`${this.url}/${category}`)
      .pipe(map(data => {
        return data.obj.slice();
      }), catchError(
        error => _throw(error.error)
      ));
  }

  getEventsByDate() {
    return this.http.get<EventResponse>(this.url)
      .pipe(map(data => {
        this.events = data.obj.slice();
        return this.events;
      }), catchError(
        error => _throw(error.error)
      ));
  }

  getEvents(skip: number, limit: number) {

    const paramaters = `/start/${skip}/limit/${limit}`;
    return this.http.get<EventResponse>(this.url + paramaters)
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
