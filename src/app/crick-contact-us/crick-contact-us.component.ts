import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-crick-contact-us',
  templateUrl: './crick-contact-us.component.html',
  styleUrls: ['./crick-contact-us.component.css']
})
export class CrickContactUSComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;

  sendMessage() {
    const templateParams = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
    };

    emailjs
      .send('service_3v5o8gq', 'template_zjzl9l8', templateParams, 'event_53x66DKdgZ2mBYy8D4ioCqjbUSER_ID')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.isSuccess = true;
          this.isError = false;
          this.resetForm();
        },
        (error) => {
          console.error('FAILED...', error);
          this.isSuccess = false;
          this.isError = true;
        }
      );
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
