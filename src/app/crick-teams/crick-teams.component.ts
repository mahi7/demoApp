import { Component } from '@angular/core';

@Component({
  selector: 'app-crick-teams',
  templateUrl: './crick-teams.component.html',
  styleUrls: ['./crick-teams.component.css']
})
export class CrickTeamsComponent {
  teams = [
    {
      id: 1,
      name: 'India',
      captain: 'Rohit Sharma',
      coach: 'Rahul Dravid',
      logo: 'assets/logos/india.png'
    },
    {
      id: 2,
      name: 'Australia',
      captain: 'Pat Cummins',
      coach: 'Andrew McDonald',
      logo: 'assets/logos/australia.png'
    },
    {
      id: 3,
      name: 'England',
      captain: 'Jos Buttler',
      coach: 'Brendon McCullum',
      logo: 'assets/logos/england.png'
    },
    {
      id: 4,
      name: 'South Africa',
      captain: 'Temba Bavuma',
      coach: 'Rob Walter',
      logo: 'assets/logos/south-africa.png'
    },
    {
      id: 5,
      name: 'New Zealand',
      captain: 'Kane Williamson',
      coach: 'Gary Stead',
      logo: 'assets/logos/new-zealand.png'
    },
    {
      id: 6,
      name: 'Pakistan',
      captain: 'Babar Azam',
      coach: 'Grant Bradburn',
      logo: 'assets/logos/pakistan.png'
    },
    {
      id: 7,
      name: 'Sri Lanka',
      captain: 'Dasun Shanaka',
      coach: 'Chris Silverwood',
      logo: 'assets/logos/sri-lanka.png'
    },
    {
      id: 8,
      name: 'West Indies',
      captain: 'Shai Hope',
      coach: 'Daren Sammy',
      logo: 'assets/logos/west-indies.png'
    },
    {
      id: 9,
      name: 'Bangladesh',
      captain: 'Shakib Al Hasan',
      coach: 'Chandika Hathurusingha',
      logo: 'assets/logos/bangladesh.png'
    },
    {
      id: 10,
      name: 'Afghanistan',
      captain: 'Hashmatullah Shahidi',
      coach: 'Jonathan Trott',
      logo: 'assets/logos/afghanistan.png'
    },
    {
      id: 11,
      name: 'Zimbabwe',
      captain: 'Craig Ervine',
      coach: 'Dave Houghton',
      logo: 'assets/logos/zimbabwe.png'
    },
    {
      id: 12,
      name: 'Ireland',
      captain: 'Andrew Balbirnie',
      coach: 'Heinrich Malan',
      logo: 'assets/logos/ireland.png'
    },
    {
      id: 13,
      name: 'Netherlands',
      captain: 'Scott Edwards',
      coach: 'Ryan Cook',
      logo: 'assets/logos/netherlands.png'
    },
    {
      id: 14,
      name: 'Scotland',
      captain: 'Richie Berrington',
      coach: 'Shane Burger',
      logo: 'assets/logos/scotland.png'
    },
    {
      id: 15,
      name: 'United Arab Emirates',
      captain: 'Muhammad Waseem',
      coach: 'Robin Singh',
      logo: 'assets/logos/uae.png'
    },
    {
      id: 16,
      name: 'Namibia',
      captain: 'Gerhard Erasmus',
      coach: 'Pierre de Bruyn',
      logo: 'assets/logos/namibia.png'
    }
  ];

  teamsipls = [
    {
      id: 17,
      name: 'Mumbai Indians',
      logo: 'assets/logos/mi.jpg',
      captain: 'Rohit Sharma',
      coach: 'Mark Boucher'
    },
    {
      id: 18,
      name: 'Chennai Super Kings',
      logo: 'assets/logos/csk.jpg',
      captain: 'MS Dhoni',
      coach: 'Stephen Fleming'
    },
    {
      id: 19,
      name: 'Royal Challengers Bangalore',
      logo: 'assets/logos/mumbai-indians.jpg',
      captain: 'Faf du Plessis',
      coach: 'Sanjay Bangar'
    },
    {
      id: 20,
      name: 'Kolkata Knight Riders',
      logo: 'assets/logos/kkr.jpg',
      captain: 'Shreyas Iyer',
      coach: 'Chandrakant Pandit'
    },
    {
      id: 21,
      name: 'Delhi Capitals',
      logo: 'assets/logos/dc.jpg',
      captain: 'David Warner',
      coach: 'Ricky Ponting'
    },
    {
      id: 22,
      name: 'Punjab Kings',
      logo: 'assets/logos/pk.jpg',
      captain: 'Shikhar Dhawan',
      coach: 'Trevor Bayliss'
    },
    {
      id: 23,
      name: 'Rajasthan Royals',
      logo: 'assets/logos/rr.jpg',
      captain: 'Sanju Samson',
      coach: 'Kumar Sangakkara'
    },
    {
      id: 24,
      name: 'Sunrisers Hyderabad',
      logo: 'assets/logos/srh.jpg',
      captain: 'Aiden Markram',
      coach: 'Brian Lara'
    },
    {
      id: 25,
      name: 'Lucknow Super Giants',
      logo: 'assets/logos/lsg.jpg',
      captain: 'KL Rahul',
      coach: 'Andy Flower'
    },
    {
      id: 26,
      name: 'Gujarat Titans',
      logo: 'assets/logos/gt.jpg',
      captain: 'Hardik Pandya',
      coach: 'Ashish Nehra'
    }
  ];
}
