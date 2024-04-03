import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/website/search/search.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { MyBookingsComponent } from './pages/website/my-bookings/my-bookings.component';
import { LoginComponent } from './pages/Admin/login/login.component';
import { LayoutComponent } from './pages/Admin/layout/layout.component';
import { AirportComponent } from './pages/Admin/airport/airport.component';
import { CityComponent } from './pages/Admin/city/city.component';
import { BookingsComponent } from './pages/Admin/bookings/bookings.component';
import { NewFlightComponent } from './pages/Admin/new-flight/new-flight.component';
import { AllFlightsComponent } from './pages/Admin/all-flights/all-flights.component';
import { WebsiteLqndingComponent } from './pages/website/website-lqnding/website-lqnding.component';

const routes: Routes = [
  {
    path:'',
    component:WebsiteLqndingComponent,children:[
      {
        path:'search',
        component:SearchComponent,
        title:'Search flight'
        },
        {
          path:'book-flight',
          component:BookFlightComponent,
          title:'Book New Ticket'
        },
        {  
          path:'Bookings',
          component: MyBookingsComponent,
          title:'My-Bookings'
        
        }

    ]
  },
{path:'login',
component:LoginComponent},

{
  path:'',
  component:LayoutComponent,children:[
    {
      path:'all-flight',
      component:AllFlightsComponent
    },
    {
      path:'airport',
      component:AirportComponent
    },
    {
      path:'city',
      component:CityComponent
    },{
      path:'all-bookings',
      component:BookingsComponent
    },
    {
      path:'new-flight',
      component:NewFlightComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
