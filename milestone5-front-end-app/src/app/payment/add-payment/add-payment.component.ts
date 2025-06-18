import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Payment, PaymentMethod, PaymentStatus } from '../../models/models';
import { PaymentService } from '../../service/payment/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payment',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-payment.component.html',
  styleUrl: './add-payment.component.css'
})
export class AddPaymentComponent {
payment: Payment = {
    bookingId: 0,
    amount: 0,
    paymentDate: '',
    paymentMethod: PaymentMethod.CreditCard,
    paymentStatus: PaymentStatus.Failed
  };

  constructor(private paymentService: PaymentService,private router: Router) {}

  onSubmit(): void {
    this.paymentService.addPayment(this.payment).subscribe({
      next: res => {
        alert('Payment added successfully!');
        this.router.navigate(['/view-payment']);  // Adjust path if needed

        this.payment = {
          bookingId: 0,
          amount: 0,
          paymentDate: '',
          paymentMethod: PaymentMethod.CreditCard,
          paymentStatus: PaymentStatus.Failed
        };
      },
      error: err => console.error('Error adding payment:', err)
    });
  }
}