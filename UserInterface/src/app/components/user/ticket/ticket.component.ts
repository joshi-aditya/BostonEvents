import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../../../services/userAccount.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor(private userAccountService: UserAccountService) { }

  ngOnInit() {
  }

}
