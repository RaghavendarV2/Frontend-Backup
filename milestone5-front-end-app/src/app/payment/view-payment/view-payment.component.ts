import { Component, OnInit } from '@angular/core';
import { Payment } from '../../models/models';
import { CommonModule } from '@angular/common';
import { PaymentService } from '../../service/payment/payment.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-payment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './view-payment.component.html',
  styleUrl: './view-payment.component.css'
})
export class ViewPaymentComponent implements OnInit {
  paymentId = 0;
  payment?: Payment;
  payments: Payment[] = [];


  constructor(private paymentService: PaymentService) {}

  fetchPayment(): void {
    this.paymentService.getPaymentById(this.paymentId).subscribe({
      next: data => this.payment = data,
      error: err => console.error('Payment not found', err)
    });
  }
  ngOnInit(): void {
    this.paymentService.getAllPayments().subscribe({
      next: data => this.payments = data,
      error: err => console.error('Failed to load payments', err)
    });
  }

}
