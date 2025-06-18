import { Component } from '@angular/core';
import { User, UserService } from '../services/user-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-component.html',
  styleUrl: './user-component.css'
})

export class UserComponent {
  newUser: any = {
    userName: '',
    email: ''
  };

  createdUser: User | null = null;
  users: User[] = [];
  errorMessage: string | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe( data => {
      this.users = data;
    })
  }

  createUser() {
    this.errorMessage = null;
    this.createdUser = null;

    if (!this.newUser.userName || !this.newUser.email) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    this.userService.createUser(this.newUser).subscribe({
      next: user => {
        this.createdUser = user;
        this.users.push(user);
        // Reset form
        this.newUser = { userName: '', email: '' };
      },
      error: err => {
        this.errorMessage = 'Failed to create user';
        console.error(err);
      }
    });
  }
}
