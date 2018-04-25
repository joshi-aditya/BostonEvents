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
    BrowseEventsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UserAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
