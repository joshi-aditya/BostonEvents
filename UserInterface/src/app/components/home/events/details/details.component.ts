import { Component, Input, OnInit } from '@angular/core';
import { Events } from '../../../../models/events';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() evt: Events;
  constructor() { }

  ngOnInit() {
  }

}
