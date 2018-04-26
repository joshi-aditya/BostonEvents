import { Component, OnInit } from '@angular/core';
import { UserAccountService } from '../../../services/userAccount.service';
import { UserAccount } from '../../../models/userAccount';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: [ './ticket.component.scss' ]
})
export class TicketComponent implements OnInit {

  user: UserAccount;
  hasBooking: boolean;

  constructor(private userAccountService: UserAccountService) {
  }

  ngOnInit() {
    this.userAccountService.getCurrentUser()
      .subscribe(data => {
        this.user = data;
        this.checkBooking().then((val) => {
          this.hasBooking = val;
        });
      }, error => console.error(error));
  }

  async checkBooking() {
    if (this.user.bookings) {
      return true;
    }
    return false;
  }

}
