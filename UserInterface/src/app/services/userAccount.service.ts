import { Injectable } from '@angular/core';
import { UserAccount } from '../models/userAccount';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UserAccountService {
  user: UserAccount;
  events: Events[];

  constructor(
    private http: HttpClient
  ) {
  }

  url = 'http://localhost:3000/user';

  signUp(user: UserAccount) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.url, body, { headers: headers })
      .pipe(map(result => {
        console.log(result);
        return user;
      }), catchError(error => Observable.throw(error.error)));
  }

  signIn(user: UserAccount) {
    const body = JSON.stringify(user);
    const signin = '/signin';
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${this.url}${signin}`, body, {headers: headers})
      .pipe(catchError(error => Observable.throw(error.error)));
  }

  logOut() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }

}
