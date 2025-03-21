import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-crick-upc-match',
  templateUrl: './crick-upc-match.component.html',
  styleUrls: ['./crick-upc-match.component.css']
})
export class CrickUpcMatchComponent implements OnInit{
  upcomingMatches = [
    {
      team1: 'Mumbai Indians',
      team2: 'Chennai Super Kings',
      team1Logo: 'assets/logos/mumbai-indians.png',
      team2Logo: 'assets/logos/mumbai-indians.png',
      series: 'IPL 2025',
      type: 'T20',
      date: 'March 25, 2025',
      time: '7:30 PM',
      venue: 'Wankhede Stadium, Mumbai',
      matchDateTime: new Date('2025-03-25T19:30:00')
  },
  {
      team1: 'India',
      team2: 'Australia',
      team1Logo: 'assets/logos/mumbai-indians.png',
      team2Logo: 'assets/logos/mumbai-indians.png',
      series: 'ICC World Cup 2025',
      type: 'ODI',
      date: 'April 5, 2025',
      time: '2:00 PM',
      venue: 'Eden Gardens, Kolkata',
      matchDateTime: new Date('2025-03-25T19:30:00')
  },
    {
      team1: 'Royal Challengers Bangalore',
      team2: 'Kolkata Knight Riders',
      team1Logo: 'assets/logos/mumbai-indians.png',
      team2Logo: 'assets/logos/mumbai-indians.png',
      series: 'ICC World Cup 2025',
      type: 'ODI',
      date: 'April 5, 2025',
      time: '2:00 PM',
      venue: 'Eden Gardens, Kolkata',
      matchDateTime: new Date('2025-03-25T19:30:00')
    },
    {
      team1: 'Delhi Capitals',
      team2: 'Sunrisers Hyderabad',
      team1Logo: 'assets/logos/mumbai-indians.png',
      team2Logo: 'assets/logos/mumbai-indians.png',
      series: 'ICC World Cup 2025',
      type: 'ODI',
      date: 'April 5, 2025',
      time: '2:00 PM',
      venue: 'Eden Gardens, Kolkata',
      matchDateTime: new Date('2025-03-25T19:30:00')
    },
    {
      team1: 'Punjab Kings',
      team2: 'Rajasthan Royals',
      team1Logo: 'assets/logos/mumbai-indians.png',
      team2Logo: 'assets/logos/mumbai-indians.png',
      series: 'ICC World Cup 2025',
      type: 'ODI',
      date: 'April 5, 2025',
      time: '2:00 PM',
      venue: 'Eden Gardens, Kolkata',
      matchDateTime: new Date('2025-03-25T19:30:00')
    },
    {
      team1: 'Lucknow Super Giants',
      team2: 'Gujarat Titans',
      team1Logo: 'assets/logos/mumbai-indians.png',
      team2Logo: 'assets/logos/mumbai-indians.png',
      series: 'ICC World Cup 2025',
      type: 'ODI',
      date: 'April 5, 2025',
      time: '2:00 PM',
      venue: 'Eden Gardens, Kolkata',
      matchDateTime: new Date('2025-03-25T19:30:00')
    }
  ];

  countdown: string = '';

  searchText: string = '';

get filteredMatches() {
  return this.upcomingMatches.filter(match =>
    match.team1.toLowerCase().includes(this.searchText.toLowerCase()) ||
    match.team2.toLowerCase().includes(this.searchText.toLowerCase()) ||
    match.series.toLowerCase().includes(this.searchText.toLowerCase())
  );
}

  ngOnInit() {
    this.startCountdown(this.upcomingMatches[0].matchDateTime);
  }

  startCountdown(matchDateTime: Date) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = matchDateTime.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        this.countdown = 'Match Started!';
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }
}
