import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from '../../../services/events.service';
import { Events } from '../../../models/events';

@Component({
  selector: 'app-review-payment',
  templateUrl: './review-payment.component.html',
  styleUrls: ['./review-payment.component.scss']
})
export class ReviewPaymentComponent implements OnInit {

  evt: Events;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    if (this.route.params['_value'].eventId) {
      this.eventsService.getEventsByID(this.route.params['_value'].eventId)
        .subscribe(data => {
          console.log(data);
          this.evt = data;
        }, error => {
          console.log(error);
          this.router.navigate(['/error']);
        });
    } else {
      this.router.navigate(['/error']);
    }
  }

}
