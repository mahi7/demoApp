import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crick-team-views',
  templateUrl: './crick-team-views.component.html',
  styleUrls: ['./crick-team-views.component.css']
})
export class CrickTeamViewsComponent implements OnInit {
  team: any;

  teams = [
    {
      id: 1,
      name: 'Mumbai Indians',
      logo: 'assets/logos/mumbai-indians.png',
      captain: 'Rohit Sharma',
      coach: 'Mark Boucher',
      homeGround: 'Wankhede Stadium, Mumbai',
      founded: '2008',
      players: ['Rohit Sharma', 'Jasprit Bumrah', 'Suryakumar Yadav', 'Ishan Kishan']
    },
    {
      id: 2,
      name: 'Chennai Super Kings',
      logo: 'assets/logos/chennai-super-kings.png',
      captain: 'MS Dhoni',
      coach: 'Stephen Fleming',
      homeGround: 'MA Chidambaram Stadium, Chennai',
      founded: '2008',
      players: ['MS Dhoni', 'Ravindra Jadeja', 'Ruturaj Gaikwad', 'Deepak Chahar']
    }
  ];

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    const teamId = Number(this.route.snapshot.paramMap.get('id'));
    this.team = this.teams.find(t => t.id === teamId);
  }

  goBack(): void {
    this.location.back();
  }
}
