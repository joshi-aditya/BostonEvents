import { UserAccount } from './userAccount';
import { Events } from './events';

export class Booking {
  constructor(
    private event: Events,
    private user: UserAccount,
    private numberOfTickets: number
  ) {}
}
