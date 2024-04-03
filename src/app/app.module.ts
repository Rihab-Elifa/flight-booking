import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/Admin/login/login.component';
import { LayoutComponent } from './pages/Admin/layout/layout.component';
import { BookingsComponent } from './pages/Admin/bookings/bookings.component';
import { CityComponent } from './pages/Admin/city/city.component';
import { AirportComponent } from './pages/Admin/airport/airport.component';
import { NewFlightComponent } from './pages/Admin/new-flight/new-flight.component';
import { AllFlightsComponent } from './pages/Admin/all-flights/all-flights.component';

import { BookFlightComponent } from './book-flight/book-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './pages/website/search/search.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { WebsiteLqndingComponent } from './pages/website/website-lqnding/website-lqnding.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    BookingsComponent,
    CityComponent,
    AirportComponent,
    NewFlightComponent,
    AllFlightsComponent,
  
    BookFlightComponent,
       SearchComponent,
       MyBookingsComponent,
       WebsiteLqndingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
