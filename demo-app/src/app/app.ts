import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddCustomer } from './add-customer/add-customer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'demo-app';
}
