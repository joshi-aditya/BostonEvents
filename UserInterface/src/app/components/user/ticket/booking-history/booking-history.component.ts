import { Component, Input, OnInit } from '@angular/core';
import { Booking } from '../../../../models/Booking';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  @Input() booking: Booking;
  newDate: Date;
  bookingDate: Date;
  constructor() { }

  ngOnInit() {
    this.newDate = new Date(this.booking.event.date);
    this.bookingDate = new Date(this.booking.bookingDate);
  }

}
