import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private baseUrl = 'http://172.24.60.170:2002/flight'
  
  constructor(private http: HttpClient) { }

  addFlight(flight:Flight): Observable<Flight>{
    return this.http.post<Flight>(`${this.baseUrl}/add`, flight);
  }

  getFlightById(id:number): Observable<Flight>{
    return this.http.get<Flight>(`${this.baseUrl}/${id}`);
  }

  getAllFlights() : Observable<Flight[]>{
    return this.http.get<Flight[]>(`${this.baseUrl}/getall`);
  }
}
