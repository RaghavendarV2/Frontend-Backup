import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Airport } from '../../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirportService {
  private baseUrl = 'http://172.24.60.170:2002/airport';

  constructor(private http: HttpClient) {}

  addAirport(airport:Airport) : Observable<Airport>{
    return this.http.post<Airport>(`${this.baseUrl}/add`, airport);
  }

  getAirportById(id:number) : Observable<Airport>{
    return this.http.get<Airport>(`${this.baseUrl}/${id}`);
  }

  getAllAirports() : Observable<Airport[]>{
    return this.http.get<Airport[]>(`${this.baseUrl}/getall`)
  }

}
