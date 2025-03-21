import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crick-news',
  templateUrl: './crick-news.component.html',
  styleUrls: ['./crick-news.component.css']
})
export class CrickNewsComponent implements OnInit{
  newsArticles = [
    {
      title: 'India Wins ODI Series Against Australia',
      summary: 'India clinched the series with a thrilling victory in the final match.',
      image: 'https://via.placeholder.com/150?text=India+vs+Australia',
      link: 'https://example.com/india-wins-odi-series'
    },
    {
      title: 'England Announces Squad for World Cup',
      summary: 'England has revealed its 15-member squad for the upcoming ICC World Cup.',
      image: 'https://via.placeholder.com/150?text=England+Squad',
      link: 'https://example.com/england-world-cup-squad'
    },
    {
      title: 'Pakistan Defeats New Zealand in T20 Series',
      summary: 'Pakistan secured a 3-2 victory in the T20 series against New Zealand.',
      image: 'https://via.placeholder.com/150?text=Pakistan+vs+New+Zealand',
      link: 'https://example.com/pakistan-t20-series'
    }
  ];

  displayedColumns: string[] = ['match', 'date', 'time', 'venue'];
  dataSource = new MatTableDataSource<Match>(IPL_SCHEDULE);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface Match {
  team1: string;
  team2: string;
  date: string;
  time: string;
  venue: string;
}

const IPL_SCHEDULE: Match[] = [
  { team1: 'Mumbai Indians', team2: 'Chennai Super Kings', date: 'March 25, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { team1: 'Royal Challengers Bangalore', team2: 'Kolkata Knight Riders', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { team1: 'Delhi Capitals', team2: 'Sunrisers Hyderabad', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { team1: 'Punjab Kings', team2: 'Rajasthan Royals', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { team1: 'Lucknow Super Giants', team2: 'Gujarat Titans', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { team1: 'Kolkata Knight Riders', team2: 'Sunrisers Hyderabad', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { team1: 'Chennai Super Kings', team2: 'Royal Challengers Bangalore', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { team1: 'Mumbai Indians', team2: 'Delhi Capitals', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { team1: 'Rajasthan Royals', team2: 'Lucknow Super Giants', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { team1: 'Sunrisers Hyderabad', team2: 'Mumbai Indians', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { team1: 'Royal Challengers Bangalore', team2: 'Delhi Capitals', date: 'April 5, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { team1: 'Punjab Kings', team2: 'Chennai Super Kings', date: 'April 6, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { team1: 'Lucknow Super Giants', team2: 'Kolkata Knight Riders', date: 'April 7, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { team1: 'Rajasthan Royals', team2: 'Gujarat Titans', date: 'April 8, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { team1: 'Delhi Capitals', team2: 'Sunrisers Hyderabad', date: 'April 9, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { team1: 'Mumbai Indians', team2: 'Royal Challengers Bangalore', date: 'April 10, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { team1: 'Chennai Super Kings', team2: 'Lucknow Super Giants', date: 'April 11, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { team1: 'Kolkata Knight Riders', team2: 'Punjab Kings', date: 'April 12, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { team1: 'Sunrisers Hyderabad', team2: 'Rajasthan Royals', date: 'April 13, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
];
