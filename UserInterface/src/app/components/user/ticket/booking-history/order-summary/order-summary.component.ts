import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../../../../../services/booking.service';
import { Booking } from '../../../../../models/Booking';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: [ './order-summary.component.scss' ]
})
export class OrderSummaryComponent implements OnInit {

  booking: Booking;
  price: any;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.route.params[ '_value' ].myTickets) {
      this.bookingService.getBookingById(this.route.params[ '_value' ].myTickets)
        .subscribe(data => {
          this.booking = data;
          this.price = this.booking.amount !== 0 ? `$${this.booking.amount}` : 'Free';
        }, err => {
          console.error(err);
          this.router.navigateByUrl('/error');
        });
    } else {
      this.router.navigateByUrl('/error');
    }
  }

}
