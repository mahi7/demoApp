import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crickreguser',
  templateUrl: './crickreguser.component.html',
  styleUrls: ['./crickreguser.component.css']
})
export class CrickreguserComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onRegister(): void {
    // Add your registration logic here (e.g., API call to save user data)
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Navigate to the login page after successful registration
    this.router.navigate(['/login']);
  }
}
