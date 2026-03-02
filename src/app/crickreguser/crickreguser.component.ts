import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crickreguser',
  templateUrl: './crickreguser.component.html',
  styleUrls: ['./crickreguser.component.css']
})
export class CrickreguserComponent {

  userRegister = {
    "username": '',
    "password": '',
  }

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private restService: RestService,
    private route: Router,
    private routprms: ActivatedRoute
  ) { }

  onRegister(): void {
    const url = 'http://localhost:8081/api/auth/register';
    this.restService.register(this.userRegister.username, this.userRegister.password).subscribe(
      (response: any) => {
        // alert('Registered Successfully');
        Swal.fire({
          title: "User added Successfully!",
          icon: "success"
        });
        console.log('User added Successfully.', response);
        // Navigate or store token if needed
        this.route.navigate(['/login']);
      },
      error => {
        alert('Invalid username or password');
        console.log('Login error:', error);
      }
    );
  }

}
