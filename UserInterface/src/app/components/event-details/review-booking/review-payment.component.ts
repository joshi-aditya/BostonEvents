import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';

@Component({
  selector: 'app-review-payment',
  templateUrl: './review-payment.component.html',
  styleUrls: [ './review-payment.component.scss' ]
})
export class ReviewPaymentComponent implements OnInit {

  evt: any;
  cost: string;
  totalCost: any;
  qty: number;
  zero: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) {
  }

  ngOnInit() {
    if (this.route.params[ '_value' ].eventId) {
      this.eventsService.getEventsByID(this.route.params[ '_value' ].eventId)
        .subscribe(data => {
          console.log(data);
          this.evt = data;
          this.cost = this.evt.cost !== 0 ? `${this.evt.cost}` : 'Free';
          if (this.cost === 'Free') {
            this.totalCost = 'Free';
          } else {
            this.totalCost = this.cost;
          }
        }, error => {
          console.log(error);
          this.router.navigate([ '/error' ]);
        });
    } else {
      this.router.navigate([ '/error' ]);
    }
  }

  findCost(quantity) {
    this.qty = parseInt(quantity, 10);
    this.totalCost = parseInt(this.cost.slice(), 10) * this.qty;
    if (this.totalCost === 0) {
      this.zero = true;
    } else {
      this.zero = false;
    }
  }

}
