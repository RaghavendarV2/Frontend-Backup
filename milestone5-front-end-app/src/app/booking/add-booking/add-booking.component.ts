// booking-form.component.ts

import { Component, OnInit } from '@angular/core';
import { Booking, BookingStatus, Payment, PaymentMethod, PaymentStatus } from '../../models/models';
import { BookingService } from '../../service/booking/booking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../service/payment/payment.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-form',
  standalone:true,
  templateUrl: './add-booking.component.html',
  imports:[FormsModule, CommonModule]
})
export class AddBookingComponent implements OnInit{
  payment!: Payment;
  paymentList: Payment[] = [ /* populate from API */ ];

  paymentIds: string[] = [];  
  booking: Booking = {
  customerId: 0,
  flightId: 0,
  bookingDate: new Date(),
  seatNumber: '',
  status: BookingStatus.Booked, // optional, can be set later
  payment: {
    bookingId: 0,
    amount: 0,
    paymentDate: '',
    paymentMethod: PaymentMethod.CreditCard, // Example, replace with actual enum value
    paymentStatus: PaymentStatus.Failed     // Example, replace with actual enum value
  }
};

  constructor(private bookingService: BookingService, private paymentService:PaymentService,private router:Router) {}
ngOnInit() {
    this.loadPaymentIds();
  }

  loadPaymentIds() {
    this.paymentService.getAllPayments().subscribe(
      (data) => {
        // Extract just IDs from payment objects
        this.paymentList=data;
      },
      (error) => {
        console.error('Error fetching payments', error);
      }
    );
  }
  fetchPayment(id:number): any {
    console.log("fetch payment :",id);
    this.paymentService.getPaymentById(id).subscribe((res) => {
      this.booking.payment = res;
      console.log(this.booking.payment);
      return res;
    });
  }


  
  onSubmit() {

    this.bookingService.addBooking(this.booking).subscribe((res) => {
      alert('Booking created successfully!');
       this.router.navigate(['/view-booking']);  
      this.resetForm();
    });
  }

  resetForm() {
  this.booking = {
    customerId: 0,
    flightId: 0,
    bookingDate: new Date(),
    seatNumber: '',
    status: undefined, // or BookingStatus.Booked if you want a default
    payment: {
      bookingId: 0,
      amount: 0,
      paymentDate: '',
      paymentMethod: PaymentMethod.CreditCard, // or default value like PaymentMethod.Card
      paymentStatus: PaymentStatus.Failed  // or PaymentStatus.Pending
    }
  };
}

}
