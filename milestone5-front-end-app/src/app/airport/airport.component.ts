import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Airport } from '../models/models';
import { AirportService } from '../service/airport/airport.service';

@Component({
  selector: 'app-airport',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})


export class AirportComponent implements OnInit {
  newAirport: any = {
    id: 0,
    code: '',
    name: '',
    city: '',
    country: ''
  }

  searchId: number | null = null;

  searchAttempted: boolean = false;

  foundAirport: Airport | null = null;

  airports : Airport[] = [];

  constructor(private airportService: AirportService, private cdr : ChangeDetectorRef){}

  ngOnInit(): void {
    this.loadAllAirports();
  }

  loadAllAirports(){
    this.airportService.getAllAirports().subscribe(data => {
      this.airports = data;
      this.cdr.detectChanges();
    })
  }

  addAirport(){
    const airport : Airport = {
      code : this.newAirport.code,
      name : this.newAirport.name,
      city : this.newAirport.city,
      country : this.newAirport.country
    }

    this.airportService.addAirport(airport).subscribe( () =>{
      this.loadAllAirports();
      this.resetForm();
    })
  }

  resetForm(){
    this.newAirport = {
      id: 0,
      code: '',
      name: '',
      city: '',
      country: ''
    }
  }

  getAirportById() : void{
    if(this.searchId == null){
      this.searchAttempted = false;
      return ;
    }
    else{
      this.searchAttempted = true;
      this.airportService.getAirportById(this.searchId).subscribe({
        next : airport => {
          this.foundAirport = airport;
          this.cdr.detectChanges();
        }
      })
    }

  }


}
