import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Booking } from '../models/Booking';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class BookingService {

  constructor(
    private http: HttpClient
  ) {
  }

  url = 'http://localhost:3000/';

  getBookingByUserId(userId: string) {
    return this.http.get<BookingResponse>(`${this.url}/byUser/${userId}`)
      .pipe(map(data => {
          console.log(data.obj);
          return data.obj;
        }, catchError(err => _throw(err.error)))
      );
  }

  getBookingById(id: string) {
    return this.http.get<BookingResponse>(`${this.url}/byId/${id}`)
      .pipe(map(data => {
          console.log(data);
          return data.obj;
        }, catchError(err => _throw(err.error)))
      );
  }

}

interface BookingResponse {
  message: string;
  obj: Booking;
}
