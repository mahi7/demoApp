import { Component, Inject, OnInit } from '@angular/core';
import { RestService } from './services/rest.service';
import { Router } from '@angular/router';
import { API_BASE_URL } from './services/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ang4-userInfo';

  constructor(private restService: RestService,
    private router: Router,
    @Inject(API_BASE_URL) public baseUrl?: string) {}
  
}
