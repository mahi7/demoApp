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
      name: 'India',
      logo: 'assets/logos/india.jpg',
      captain: 'Rohit Sharma',
      coach: 'Rahul Dravid',
      homeGround: 'Wankhede Stadium, Mumbai',
      founded: '1932',
      players: ['Virat Kohli', 'Rohit Sharma', 'Jasprit Bumrah', 'Ravindra Jadeja']
    },
    {
      id: 2,
      name: 'Australia',
      logo: 'assets/logos/australia.jpg',
      captain: 'Pat Cummins',
      coach: 'Andrew McDonald',
      homeGround: 'Melbourne Cricket Ground, Melbourne',
      founded: '1877',
      players: ['David Warner', 'Steve Smith', 'Mitchell Starc', 'Pat Cummins']
    },
    {
      id: 3,
      name: 'England',
      logo: 'assets/logos/england.jpg',
      captain: 'Jos Buttler',
      coach: 'Brendon McCullum',
      homeGround: 'Lord\'s Cricket Ground, London',
      founded: '1877',
      players: ['Joe Root', 'Ben Stokes', 'Jofra Archer', 'Jos Buttler']
    },
    {
      id: 4,
      name: 'South Africa',
      logo: 'assets/logos/south-africa.jpg',
      captain: 'Temba Bavuma',
      coach: 'Rob Walter',
      homeGround: 'Newlands Cricket Ground, Cape Town',
      founded: '1889',
      players: ['Quinton de Kock', 'Kagiso Rabada', 'David Miller', 'Temba Bavuma']
    },
    {
      id: 5,
      name: 'New Zealand',
      logo: 'assets/logos/new-zealand.jpg',
      captain: 'Kane Williamson',
      coach: 'Gary Stead',
      homeGround: 'Eden Park, Auckland',
      founded: '1930',
      players: ['Kane Williamson', 'Trent Boult', 'Devon Conway', 'Tim Southee']
    },
    {
      id: 6,
      name: 'Pakistan',
      logo: 'assets/logos/pakistan.jpg',
      captain: 'Babar Azam',
      coach: 'Grant Bradburn',
      homeGround: 'Gaddafi Stadium, Lahore',
      founded: '1952',
      players: ['Babar Azam', 'Shaheen Afridi', 'Mohammad Rizwan', 'Shadab Khan']
    },
    {
      id: 7,
      name: 'Sri Lanka',
      logo: 'assets/logos/sri-lanka.jpg',
      captain: 'Dasun Shanaka',
      coach: 'Chris Silverwood',
      homeGround: 'R. Premadasa Stadium, Colombo',
      founded: '1982',
      players: ['Angelo Mathews', 'Kusal Perera', 'Wanindu Hasaranga', 'Dasun Shanaka']
    },
    {
      id: 8,
      name: 'West Indies',
      logo: 'assets/logos/west-indies.jpg',
      captain: 'Shai Hope',
      coach: 'Daren Sammy',
      homeGround: 'Kensington Oval, Barbados',
      founded: '1928',
      players: ['Nicholas Pooran', 'Jason Holder', 'Shimron Hetmyer', 'Shai Hope']
    },
    {
      id: 9,
      name: 'Bangladesh',
      logo: 'assets/logos/bangladesh.jpg',
      captain: 'Shakib Al Hasan',
      coach: 'Chandika Hathurusingha',
      homeGround: 'Sher-e-Bangla National Stadium, Dhaka',
      founded: '2000',
      players: ['Shakib Al Hasan', 'Tamim Iqbal', 'Mushfiqur Rahim', 'Mustafizur Rahman']
    },
    {
      id: 10,
      name: 'Afghanistan',
      logo: 'assets/logos/afghanistan.jpg',
      captain: 'Hashmatullah Shahidi',
      coach: 'Jonathan Trott',
      homeGround: 'Kabul International Cricket Stadium, Kabul',
      founded: '2017',
      players: ['Rashid Khan', 'Mohammad Nabi', 'Rahmanullah Gurbaz', 'Hashmatullah Shahidi']
    },
    {
      id: 11,
      name: 'Zimbabwe',
      logo: 'assets/logos/zimbabwe.jpg',
      captain: 'Craig Ervine',
      coach: 'Dave Houghton',
      homeGround: 'Harare Sports Club, Harare',
      founded: '1992',
      players: ['Sikandar Raza', 'Sean Williams', 'Blessing Muzarabani', 'Craig Ervine']
    },
    {
      id: 12,
      name: 'Ireland',
      logo: 'assets/logos/ireland.jpg',
      captain: 'Andrew Balbirnie',
      coach: 'Heinrich Malan',
      homeGround: 'Malahide Cricket Club Ground, Dublin',
      founded: '2017',
      players: ['Paul Stirling', 'Andrew Balbirnie', 'Harry Tector', 'Mark Adair']
    },
    {
      id: 13,
      name: 'Netherlands',
      logo: 'assets/logos/netherlands.jpg',
      captain: 'Scott Edwards',
      coach: 'Ryan Cook',
      homeGround: 'VRA Cricket Ground, Amstelveen',
      founded: '1996',
      players: ['Scott Edwards', 'Max O\'Dowd', 'Bas de Leede', 'Fred Klaassen']
    },
    {
      id: 14,
      name: 'Scotland',
      logo: 'assets/logos/scotland.jpg',
      captain: 'Richie Berrington',
      coach: 'Shane Burger',
      homeGround: 'The Grange Club, Edinburgh',
      founded: '1994',
      players: ['Richie Berrington', 'George Munsey', 'Mark Watt', 'Chris Greaves']
    },
    {
      id: 15,
      name: 'United Arab Emirates',
      logo: 'assets/logos/uae.jpg',
      captain: 'Muhammad Waseem',
      coach: 'Robin Singh',
      homeGround: 'Dubai International Cricket Stadium, Dubai',
      founded: '1994',
      players: ['Muhammad Waseem', 'Chirag Suri', 'Rohan Mustafa', 'Ahmed Raza']
    },
    {
      id: 16,
      name: 'Namibia',
      logo: 'assets/logos/namibia.jpg',
      captain: 'Gerhard Erasmus',
      coach: 'Pierre de Bruyn',
      homeGround: 'Wanderers Cricket Ground, Windhoek',
      founded: '1992',
      players: ['Gerhard Erasmus', 'David Wiese', 'JJ Smit', 'Ruben Trumpelmann']
    },
    {
      id: 17,
      name: 'Mumbai Indians',
      logo: 'assets/logos/mi.jpg',
      captain: 'Rohit Sharma',
      coach: 'Mark Boucher',
      homeGround: 'Wankhede Stadium, Mumbai',
      founded: '2008',
      players: ['Rohit Sharma', 'Jasprit Bumrah', 'Suryakumar Yadav', 'Ishan Kishan']
    },
    {
      id: 18,
      name: 'Chennai Super Kings',
      logo: 'assets/logos/csk.jpg',
      captain: 'MS Dhoni',
      coach: 'Stephen Fleming',
      homeGround: 'MA Chidambaram Stadium, Chennai',
      founded: '2008',
      players: ['MS Dhoni', 'Ravindra Jadeja', 'Ruturaj Gaikwad', 'Deepak Chahar']
    },
    {
      id: 19,
      name: 'Royal Challengers Bangalore',
      logo: 'assets/logos/rcb.jpg',
      captain: 'Faf du Plessis',
      coach: 'Sanjay Bangar',
      homeGround: 'M. Chinnaswamy Stadium, Bangalore',
      founded: '2008',
      players: ['Virat Kohli', 'Faf du Plessis', 'Glenn Maxwell', 'Mohammed Siraj']
    },
    {
      id: 20,
      name: 'Kolkata Knight Riders',
      logo: 'assets/logos/kkr.jpg',
      captain: 'Shreyas Iyer',
      coach: 'Chandrakant Pandit',
      homeGround: 'Eden Gardens, Kolkata',
      founded: '2008',
      players: ['Shreyas Iyer', 'Andre Russell', 'Sunil Narine', 'Nitish Rana']
    },
    {
      id: 21,
      name: 'Delhi Capitals',
      logo: 'assets/logos/dc.jpg',
      captain: 'David Warner',
      coach: 'Ricky Ponting',
      homeGround: 'Arun Jaitley Stadium, Delhi',
      founded: '2008',
      players: ['David Warner', 'Prithvi Shaw', 'Axar Patel', 'Anrich Nortje']
    },
    {
      id: 22,
      name: 'Punjab Kings',
      logo: 'assets/logos/pk.jpg',
      captain: 'Shikhar Dhawan',
      coach: 'Trevor Bayliss',
      homeGround: 'PCA Stadium, Mohali',
      founded: '2008',
      players: ['Shikhar Dhawan', 'Liam Livingstone', 'Arshdeep Singh', 'Kagiso Rabada']
    },
    {
      id: 23,
      name: 'Rajasthan Royals',
      logo: 'assets/logos/rr.jpg',
      captain: 'Sanju Samson',
      coach: 'Kumar Sangakkara',
      homeGround: 'Sawai Mansingh Stadium, Jaipur',
      founded: '2008',
      players: ['Sanju Samson', 'Jos Buttler', 'Yuzvendra Chahal', 'Trent Boult']
    },
    {
      id: 24,
      name: 'Sunrisers Hyderabad',
      logo: 'assets/logos/sh.jpg',
      captain: 'Aiden Markram',
      coach: 'Brian Lara',
      homeGround: 'Rajiv Gandhi International Stadium, Hyderabad',
      founded: '2013',
      players: ['Aiden Markram', 'Rahul Tripathi', 'Bhuvneshwar Kumar', 'Umran Malik']
    },
    {
      id: 25,
      name: 'Lucknow Super Giants',
      logo: 'assets/logos/lsg.jpg',
      captain: 'KL Rahul',
      coach: 'Andy Flower',
      homeGround: 'Ekana Cricket Stadium, Lucknow',
      founded: '2021',
      players: ['KL Rahul', 'Quinton de Kock', 'Marcus Stoinis', 'Ravi Bishnoi']
    },
    {
      id: 26,
      name: 'Gujarat Titans',
      logo: 'assets/logos/gt.jpg',
      captain: 'Hardik Pandya',
      coach: 'Ashish Nehra',
      homeGround: 'Narendra Modi Stadium, Ahmedabad',
      founded: '2021',
      players: ['Hardik Pandya', 'Shubman Gill', 'Rashid Khan', 'Mohammed Shami']
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
