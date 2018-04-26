import { UserAccount } from './userAccount';
import { Events } from './events';

export class Booking {
  constructor(
    public event: Events,
    public user: UserAccount,
    public numberOfTickets: number,
    public amount: any,
    public bookingDate: Date
  ) {}
}
