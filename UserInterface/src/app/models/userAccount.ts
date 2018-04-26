import { Booking } from './Booking';

export class UserAccount {
  constructor(
    public email: string,
    public password: string,
    public firstName?: string,
    public lastName?: string,
    private bookings?: Array<Booking>) {
  }
}
