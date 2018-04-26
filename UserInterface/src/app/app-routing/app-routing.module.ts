import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UserComponent } from '../components/user/user.component';
import { BrowseEventsComponent } from '../components/browse-events/browse-events.component';
import { EventDetailsComponent } from '../components/event-details/event-details.component';
import { TicketComponent } from '../components/user/ticket/ticket.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { OrderSummaryComponent } from '../components/user/ticket/booking-history/order-summary/order-summary.component';
import { ReviewPaymentComponent } from '../components/event-details/review-booking/review-payment.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'user',
    children: [
      {
        path: 'login',
        component: UserComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'browse',
    component: BrowseEventsComponent
  },
  {
    path: 'events',
    children: [
      {
        path: ':category',
        component: BrowseEventsComponent
      },
      {
        path: ':category/:id',
        component: EventDetailsComponent
      },
      {
        path: '',
        redirectTo: '/error',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'bookings',
    children: [
      {
        path: '',
        component: TicketComponent
      },
      {
        path: ':myTickets',
        component: OrderSummaryComponent
      }
    ]
  },
  {
    path: 'review',
    children: [
      {
        path: ':eventId',
        component: ReviewPaymentComponent
      },
      {
        path: '',
        redirectTo: '/error',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'error',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
