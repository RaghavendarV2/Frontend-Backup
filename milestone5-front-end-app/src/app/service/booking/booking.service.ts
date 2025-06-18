// booking.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private baseUrl = 'http://localhost:2003/booking';

  constructor(private http: HttpClient) {}

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.baseUrl}/add`, booking);
  }

  viewBooking(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.baseUrl}/${id}`);
  }

  getFullBooking(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/details/${id}`);
  }
  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${this.baseUrl}/all`);
  }
}
