import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { UserComponent } from '../components/user/user.component';
import { BrowseEventsComponent } from '../components/browse-events/browse-events.component';
import { EventDetailsComponent } from '../components/event-details/event-details.component';

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
      }
    ]
  },
  {
    path: 'browse',
    component: BrowseEventsComponent
  },
  {
    path: 'events',
    component: EventDetailsComponent
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
