import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crick-high-details',
  templateUrl: './crick-high-details.component.html',
  styleUrls: ['./crick-high-details.component.css']
})
export class CrickHighDetailsComponent implements OnInit{
  highlightId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.highlightId = this.route.snapshot.paramMap.get('id');
    // Fetch and display the highlight details using the ID
  }
}
