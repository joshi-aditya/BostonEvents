import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import {CategoriesComponent} from './components/home/categories/categories.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { EventsComponent } from './components/home/events/events.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UserAccountService } from './services/userAccount.service';
import { DetailsComponent } from './components/home/events/details/details.component';
import { BrowseEventsComponent } from './components/browse-events/browse-events.component';
import { DisplayEventsComponent } from './components/browse-events/display-events/display-events.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { TicketComponent } from './components/user/ticket/ticket.component';
import { EventsService } from './services/events.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    CarouselComponent,
    EventsComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    BrowseEventsComponent,
    DisplayEventsComponent,
    EventDetailsComponent,
    TicketComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserAccountService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
