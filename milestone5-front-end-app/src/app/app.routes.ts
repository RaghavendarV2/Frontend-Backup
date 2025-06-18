import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBookingComponent } from './booking/add-booking/add-booking.component';
import { ViewBookingComponent } from './booking/view-booking/view-booking.component';
import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
import { ViewPaymentComponent } from './payment/view-payment/view-payment.component';
import { FlightComponent } from './flight/flight.component';
import { AirportComponent } from './airport/airport.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'flight-service', component: FlightComponent},
    {path:'airports', component:AirportComponent},
    {path:'add-booking',component:AddBookingComponent},
    {path:'view-booking',component:ViewBookingComponent},
    {path:'add-payment',component:AddPaymentComponent},
    {path:'view-payment',component:ViewPaymentComponent}
];
