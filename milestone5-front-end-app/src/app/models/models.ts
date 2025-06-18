// models.ts

export enum BookingStatus {
  Booked = 'Booked',
  Cancelled = 'Cancelled',
  CheckedIn = 'CheckedIn'
}

export enum PaymentMethod {
  CreditCard = 'CreditCard',
  DebitCard = 'DebitCard',
  PayPal = 'PayPal'
}

export enum PaymentStatus {
  Success = 'Success',
  Failed = 'Failed',
  Pending = 'Pending'
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other'
}

export interface Booking {
  id?: number;
  customerId: number;
  flightId: number;
  bookingDate: Date;
  seatNumber: string;
  status?: BookingStatus;
  payment: Payment;
}

export interface Payment {
  id?: number;
  bookingId: number;
  amount: number;
  paymentDate: string;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
}

export interface Passenger {
  id: string;
  bookingId: string;
  name: string;
  age: number;
  gender: Gender;
  passportNumber: string;
  nationality: string;
}

export interface Airport{
  id?:number;
  code?:string;
  name?:string;
  city?:string;
  country?:string;
}


export enum Status{
  Scheduled = 'Scheduled',
  Cancelled = 'Cancelled',
  Delayed = 'Delayed'
}

export interface Flight{
  id?:number;
  flightNumber?:string;
  departureAirport?: Airport;
  arrivalAirport?: Airport;
  departureTime?:string;
  arrivalTime?:string;
  seatCapacity?:number;
  availableSeats?:number;
  status: Status;
}
