import { Component } from '@angular/core';

@Component({
  selector: 'app-crick-livescore',
  templateUrl: './crick-livescore.component.html',
  styleUrls: ['./crick-livescore.component.css']
})
export class CrickLivescoreComponent {
  liveMatches = [
    {
      id: 1,
      series: 'India vs Australia - ODI Series',
      team1: 'India',
      team2: 'Australia',
      score: '250/4',
      overs: '45.3',
      status: 'In Progress'
    },
    {
      id: 2,
      series: 'England vs South Africa - Test Series',
      team1: 'England',
      team2: 'South Africa',
      score: '320/8',
      overs: 'Day 2, 85 Overs',
      status: 'In Progress'
    },
    {
      id: 3,
      series: 'Pakistan vs New Zealand - T20 Series',
      team1: 'Pakistan',
      team2: 'New Zealand',
      score: '180/6',
      overs: '20 Overs',
      status: 'Completed'
    },
    {
      id: 4,
      series: 'KKR vs KXIP - T20 Series',
      team1: 'Pakistan',
      team2: 'New Zealand',
      score: '180/6',
      overs: '20 Overs',
      status: 'Completed'
    },
    {
      id: 5,
      series: 'MI vs RR - T20 Series',
      team1: 'Pakistan',
      team2: 'New Zealand',
      score: '180/6',
      overs: '20 Overs',
      status: 'Completed'
    },
    {
      id: 6,
      series: 'DD vs RCB - T20 Series',
      team1: 'Pakistan',
      team2: 'New Zealand',
      score: '180/6',
      overs: '20 Overs',
      status: 'Completed'
    }
  ];

  viewDetails(matchId: number) {
    console.log('View details for match ID:', matchId);
    // Add navigation or logic to view detailed match information
  }
}
