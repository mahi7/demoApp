// ...existing code...
import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-crick-admin',
  templateUrl: './crick-admin.component.html',
  styleUrls: ['./crick-admin.component.css']
})
export class CrickAdminComponent implements OnInit {
  messages: any[] = [];
  loading = false;
  error = '';

  constructor(private restService: RestService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    console.log("Contact Added");
    this.loading = true;
    this.restService.getContacts().subscribe(
      (res: any) => { 
        this.messages = res || []; 
        console.log("Contact data", this.messages);
        this.loading = false; 
      },
      err => { this.error = 'Failed to load'; console.error(err); this.loading = false; }
    );
  }

  markRead(id: string): void {
    this.restService.markContactRead(id).subscribe(() => this.load(), err => console.error(err));
  }

  deleteMsg(id: string): void {
    if (!confirm('Delete this message?')) return;
    this.restService.deleteContact(id).subscribe(() => this.load(), err => console.error(err));
  }
}