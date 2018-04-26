import {Component, Input, OnInit} from '@angular/core';
import { Events } from './../../../models/events';

@Component({
  selector: 'app-display-events',
  templateUrl: './display-events.component.html',
  styleUrls: ['./display-events.component.scss']
})
export class DisplayEventsComponent implements OnInit {

  constructor() { }

  @Input() evt: Events;
  newDate: Date;
  cost: any;

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
