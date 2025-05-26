import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

interface Player {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

interface Match {
  id: number;
  team1: string;
  team2: string;
  team1Players: Player[];
  team2Players: Player[];
  team1Score: string;
  team1Overs: string;
  team1LastWicket: string;
  team1Partnership: string;
  team2Score: string;
  team2Overs: string;
  team2LastWicket: string;
  team2Partnership: string;
  series: string;
  type: string;
  venue: string;
  date: string;
  status: string;
}

@Component({
  selector: 'app-live-score-views',
  templateUrl: './live-score-views.component.html',
  styleUrls: ['./live-score-views.component.css']
})
export class LiveScoreViewsComponent implements OnInit {
  match: Match | undefined;
  matches: Match[] = [
    {
      id: 1,
      team1: 'India',
      team2: 'Australia',
      team1Players: [
        { name: 'Rohit Sharma', runs: 45, balls: 30, fours: 5, sixes: 2, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        // Add remaining players...
      ],
      team2Players: [
        { name: 'David Warner', runs: 50, balls: 35, fours: 7, sixes: 1, strikeRate: 142.85 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        // Add remaining players...
      ],
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
    },
    {
      id: 2,
      team1: 'India',
      team2: 'Australia',
      team1Players: [
        { name: 'Rohit Sharma', runs: 45, balls: 30, fours: 5, sixes: 2, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        // Add remaining players...
      ],
      team2Players: [
        { name: 'David Warner', runs: 50, balls: 35, fours: 7, sixes: 1, strikeRate: 142.85 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        // Add remaining players...
      ],
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
    },
    {
      id: 3,
      team1: 'India',
      team2: 'Australia',
      team1Players: [
        { name: 'Rohit Sharma', runs: 45, balls: 30, fours: 5, sixes: 2, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        // Add remaining players...
      ],
      team2Players: [
        { name: 'David Warner', runs: 50, balls: 35, fours: 7, sixes: 1, strikeRate: 142.85 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        // Add remaining players...
      ],
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
    },
    {
      id: 4,
      team1: 'India',
      team2: 'Australia',
      team1Players: [
        { name: 'Rohit Sharma', runs: 45, balls: 30, fours: 5, sixes: 2, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        // Add remaining players...
      ],
      team2Players: [
        { name: 'David Warner', runs: 50, balls: 35, fours: 7, sixes: 1, strikeRate: 142.85 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        // Add remaining players...
      ],
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
    },
    {
      id: 5,
      team1: 'India',
      team2: 'Australia',
      team1Players: [
        { name: 'Rohit Sharma', runs: 45, balls: 30, fours: 5, sixes: 2, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        // Add remaining players...
      ],
      team2Players: [
        { name: 'David Warner', runs: 50, balls: 35, fours: 7, sixes: 1, strikeRate: 142.85 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        // Add remaining players...
      ],
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
    },
    {
      id: 6,
      team1: 'India',
      team2: 'Australia',
      team1Players: [
        { name: 'Rohit Sharma', runs: 45, balls: 30, fours: 5, sixes: 2, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        { name: 'Virat Kohli', runs: 60, balls: 40, fours: 6, sixes: 1, strikeRate: 150 },
        // Add remaining players...
      ],
      team2Players: [
        { name: 'David Warner', runs: 50, balls: 35, fours: 7, sixes: 1, strikeRate: 142.85 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        { name: 'Steve Smith', runs: 40, balls: 25, fours: 4, sixes: 2, strikeRate: 160 },
        // Add remaining players...
      ],
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

    if (!this.match) {
      console.error('Match not found!');
      this.goBack();
    }
  }

  goBack(): void {
    this.location.back();
  }
}