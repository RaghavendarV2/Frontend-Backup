import { Component, OnInit } from '@angular/core';
import { Booking } from '../../models/models';
import { BookingService } from '../../service/booking/booking.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-booking',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-booking.component.html',
  styleUrl: './view-booking.component.css'
})
export class ViewBookingComponent implements OnInit{
bookingId = 0;
  booking?: Booking;
  bookingDetails: any;
  bookings: any[] = [];


  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.getAllBookings().subscribe({
      next: data => this.bookings = data,
      error: err => console.error('Error fetching bookings', err)
    });
  }


  viewBooking() {
    this.bookingService.viewBooking(this.bookingId).subscribe((res) => {
      this.booking = res;
    });
  }

  getFullDetails() {
    this.bookingService.getFullBooking(this.bookingId).subscribe((res) => {
      this.bookingDetails = res;
    });
  }
}
