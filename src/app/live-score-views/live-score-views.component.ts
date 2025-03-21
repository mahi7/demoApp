import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-live-score-views',
  templateUrl: './live-score-views.component.html',
  styleUrls: ['./live-score-views.component.css']
})
export class LiveScoreViewsComponent implements OnInit {
  match: any;

  matches = [
    {
      id: 1,
      team1: 'India',
      team2: 'Australia',
      team1Score: '250/4',
      team1Overs: '45.3',
      team1LastWicket: 'Virat Kohli b Starc 85(90)',
      team1Partnership: '50 runs (30 balls)',
      team2Score: '200/6',
      team2Overs: '40.0',
      team2LastWicket: 'Steve Smith b Bumrah 45(50)',
      team2Partnership: '20 runs (15 balls)',
      series: 'India vs Australia - ODI Series',
      type: 'ODI',
      venue: 'Wankhede Stadium, Mumbai',
      date: 'March 25, 2025',
      status: 'In Progress'
    }
  ];

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const matchId = Number(this.route.snapshot.paramMap.get('id'));
    this.match = this.matches.find(m => m.id === matchId);
  }

  goBack(): void {
    this.location.back();
  }
}