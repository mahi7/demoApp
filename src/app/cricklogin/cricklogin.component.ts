import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cricklogin',
  templateUrl: './cricklogin.component.html',
  styleUrls: ['./cricklogin.component.css']
})
export class CrickloginComponent {
  username: string = 'Manoj';
  password: string = 'admin';

  constructor(private router: Router) {}

  onLogin(): void {
    // Add your authentication logic here (e.g., API call to validate credentials)
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // Navigate to the homepage after successful login
    this.router.navigate(['/']);
  }
}
