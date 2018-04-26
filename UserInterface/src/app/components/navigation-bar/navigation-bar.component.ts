import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserAccountService } from '../../services/userAccount.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit, OnChanges {

  userName: string;
  constructor(
    private userAccountService: UserAccountService
  ) { }

  ngOnInit() {
    this.userAccountService.getCurrentUser();
    this.userAccountService.user = JSON.parse(localStorage.getItem('user'));
    if (this.isLoggedIn()) {
      this.userName = this.userAccountService.user.firstName + ' ' + this.userAccountService.user.lastName;
    }
    console.log(this.userName);
  }

  isLoggedIn() {
    return this.userAccountService.isLoggedIn();
  }

  onLogout() {
    this.userAccountService.logOut();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isLoggedIn()) {
      this.userName = this.userAccountService.user.firstName + ' ' + this.userAccountService.user.lastName;
    }
    console.log(this.userName);
  }

}
