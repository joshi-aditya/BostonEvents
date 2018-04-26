import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../../../models/events';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ]
})
export class DetailsComponent implements OnInit {

  @Input() evt: Events;
  newDate: Date;
  cost: any;

  constructor() {
  }

  ngOnInit() {
    this.newDate = new Date(this.evt.date);
    this.findCost();
  }

  findCost() {
    if (this.evt.cost) {
      this.cost = `$${this.evt.cost}`;
    } else {
      this.cost = 'Free';
    }
  }
}
