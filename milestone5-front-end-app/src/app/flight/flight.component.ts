import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Airport, Flight, Status } from '../models/models';
import { FlightService } from '../service/flight/flight.service';

@Component({
  selector: 'app-flight',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent implements OnInit {
  newFlight: any = {
    flightNumber: '',
    departureAirportId: null,
    arrivalAirportId: null,
    departureTime: '',
    arrivalTime: '',
    seatCapacity: null,
    availableSeats: null,
    status: Status.Scheduled
  }

  searchId: number | null = null;
  searchAttempted: boolean = false;
  foundFlight: Flight | null = null;

  flights: Flight[] = [];

  constructor(private flightService: FlightService,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadAllFlight();
  }

  loadAllFlight() {
    this.flightService.getAllFlights().subscribe(data => {
      this.flights = data;
      this.cdr.detectChanges();
    })
  }

  addFlight() {
    
    const flight: Flight = {
      flightNumber: this.newFlight.flightNumber,
      departureAirport: { id: this.newFlight.departureAirportId } as Airport,
      arrivalAirport: { id: this.newFlight.arrivalAirportId } as Airport,
      departureTime: this.newFlight.departureTime,
      arrivalTime: this.newFlight.arrivalTime,
      seatCapacity: this.newFlight.seatCapacity,
      availableSeats: this.newFlight.availableSeats,
      status: this.newFlight.status
    };

    this.flightService.addFlight(flight).subscribe(() => {
      this.loadAllFlight();
      this.resetForm();
    });
  }

  resetForm() {
    this.newFlight = {
      flightNumber: '',
      departureAirportId: null,
      arrivalAirportId: null,
      departureTime: '',
      arrivalTime: '',
      seatCapacity: null,
      availableSeats: null
    };
  }


  findFlightById():void{
    if(this.searchId == null){
      this.foundFlight = null;
      this.searchAttempted = false;
      this.cdr.detectChanges();
      return;
    }
    
    this.searchAttempted = true;
    this.flightService.getFlightById(this.searchId).subscribe({
      next: flight => {
        this.foundFlight = flight;
        this.cdr.detectChanges();
      },
      error:() => {
        this.foundFlight = null;
        this.cdr.detectChanges();
      }
    })
  }
}
