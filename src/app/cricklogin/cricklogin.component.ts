import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cricklogin',
  templateUrl: './cricklogin.component.html',
  styleUrls: ['./cricklogin.component.css']
})
export class CrickloginComponent {
  userLogin = {
    "username" : '',
    "password" : ''
  }


  // constructor(private router: Router) { }

  constructor(private restService: RestService,
    private route: Router,
    private routprms: ActivatedRoute
  ) { }

  onLogin() {
    const url = 'http://localhost:8081/api/auth/login';
    this.restService.login(this.userLogin.username, this.userLogin.password).subscribe(
      (response: any) => {
        // alert('Successfully login');
        console.log('Successfully login.', response);
        Swal.fire({
                  title: "User login Successfully!",
                  icon: "success"
                });
        // Navigate or store token if needed
        this.route.navigate(['/']);
      },
      error => {
        // alert('Invalid username or password');
        Swal.fire({
                  title: "Invalid username or password!",
                  icon: "error"
                });
        console.log('Login error:', error);
      }
    );
  }
}
