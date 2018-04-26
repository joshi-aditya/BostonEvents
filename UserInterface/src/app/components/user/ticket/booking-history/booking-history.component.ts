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
  price: any;
  constructor() { }

  ngOnInit() {
    this.newDate = new Date(this.booking.event.date);
    this.bookingDate = new Date(this.booking.bookingDate);
    this.price = this.booking.amount !== 0 ? `$${this.booking.amount}` : 'Free';
  }

}
