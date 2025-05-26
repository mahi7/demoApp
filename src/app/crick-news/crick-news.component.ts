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
    { id: 1, title: 'Chennai Super Kings vs Gujarat Titans', summary: 'CSK won against GT...', image: 'path-to-image', link: '', content: 'Detailed content for Article 1...' },
    { id: 2, title: 'Article 2', summary: 'Summary of Article 2...', image: 'path-to-image', link: '', content: 'Detailed content for Article 2...' },
    { id: 3, title: 'Article 3', summary: 'Summary of Article 3...', image: 'path-to-image', link: '', content: 'Detailed content for Article 3...' },
    { id: 3, title: 'Article 3', summary: 'Summary of Article 3...', image: 'path-to-image', link: '', content: 'Detailed content for Article 3...' },
    { id: 3, title: 'Article 3', summary: 'Summary of Article 3...', image: 'path-to-image', link: '', content: 'Detailed content for Article 3...' },
    { id: 3, title: 'Article 3', summary: 'Summary of Article 3...', image: 'path-to-image', link: '', content: 'Detailed content for Article 3...' }
  ];

  displayedColumns: string[] = ['srno', 'match', 'date', 'time', 'venue'];
  dataSource = new MatTableDataSource<Match>(IPL_SCHEDULE);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface Match {
  srno: String;
  team1: string;
  team2: string;
  date: string;
  time: string;
  venue: string;
}

const IPL_SCHEDULE: Match[] = [
  { srno: '1', team1: 'Kolkata Knight Riders', team2: 'Royal Challengers Bangalore', date: 'March 22, 2025', time: '7:30  PM', venue: 'Eden Gardens, Kolkata, West Bengal' },
  { srno: '2',team1: 'Sunrisers Hyderabad', team2: 'Rajasthan Royals', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { srno: '3',team1: 'Chennai Super Kings', team2: 'Mumbai Indians', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { srno: '4',team1: 'Delhi Capitals', team2: 'Lucknow Super Giants', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { srno: '5',team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { srno: '6',team1: 'Rajasthan Royals', team2: 'Kolkata Knight Riders', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { srno: '7', team1: 'Sunrisers Hyderabad', team2: 'Lucknow Super Giants', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { srno: '8', team1: 'Mumbai Indians', team2: 'Delhi Capitals', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { srno: '9', team1: 'Rajasthan Royals', team2: 'Lucknow Super Giants', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { srno: '10', team1: 'Delhi Capitals', team2: 'Sunrisers Hyderabad', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { srno: '11',team1: 'Rajasthan Royals', team2: 'Chennai Super Kings', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { srno: '12', team1: 'Mumbai Indians', team2: 'Chennai Super Kings', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { srno: '13', team1: 'Kolkata Knight Riders', team2: 'Kolkata Knight Riders', date: 'March 22, 2025', time: '7:30  PM', venue: 'Eden Gardens, Kolkata, West Bengal' },
  { srno: '14', team1: 'Sunrisers Hyderabad', team2: 'Rajasthan Royals', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { srno: '15',team1: 'Chennai Super Kings', team2: 'Mumbai Indians', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { srno: '16',team1: 'Delhi Capitals', team2: 'Lucknow Super Giants', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { srno: '17',team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { srno: '18',team1: 'Rajasthan Royals', team2: 'Kolkata Knight Riders', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { srno: '19',team1: 'Sunrisers Hyderabad', team2: 'Lucknow Super Giants', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { srno: '20',team1: 'Mumbai Indians', team2: 'Delhi Capitals', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { srno: '21',team1: 'Rajasthan Royals', team2: 'Lucknow Super Giants', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { srno: '22', team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { srno: '23',team1: 'Sunrisers Hyderabad', team2: 'Mumbai Indians', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { srno: '24',team1: 'Kolkata Knight Riders', team2: 'Royal Challengers Bangalore', date: 'March 22, 2025', time: '7:30  PM', venue: 'Eden Gardens, Kolkata, West Bengal' },
  { srno: '25',team1: 'Sunrisers Hyderabad', team2: 'Rajasthan Royals', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { srno: '26',team1: 'Chennai Super Kings', team2: 'Mumbai Indians', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { srno: '27',team1: 'Delhi Capitals', team2: 'Lucknow Super Giants', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { srno: '28',team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { srno: '29',team1: 'Rajasthan Royals', team2: 'Kolkata Knight Riders', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { srno: '30', team1: 'Sunrisers Hyderabad', team2: 'Lucknow Super Giants', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { srno: '31', team1: 'Mumbai Indians', team2: 'Delhi Capitals', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { srno: '32',team1: 'Rajasthan Royals', team2: 'Lucknow Super Giants', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { srno: '33',team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { srno: '34',team1: 'Sunrisers Hyderabad', team2: 'Mumbai Indians', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { srno: '35',team1: 'Kolkata Knight Riders', team2: 'Royal Challengers Bangalore', date: 'March 22, 2025', time: '7:30  PM', venue: 'Eden Gardens, Kolkata, West Bengal' },
  { srno: '36',team1: 'Sunrisers Hyderabad', team2: 'Rajasthan Royals', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { srno: '37', team1: 'Chennai Super Kings', team2: 'Mumbai Indians', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { srno: '38',team1: 'Delhi Capitals', team2: 'Lucknow Super Giants', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { srno: '39',team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { srno: '40',team1: 'Rajasthan Royals', team2: 'Kolkata Knight Riders', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { srno: '41',team1: 'Sunrisers Hyderabad', team2: 'Lucknow Super Giants', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { srno: '42',team1: 'Mumbai Indians', team2: 'Delhi Capitals', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { srno: '43',team1: 'Rajasthan Royals', team2: 'Lucknow Super Giants', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { srno: '44',team1: 'Gujarat Titans', team2: 'Punjab Kings', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { srno: '45',team1: 'LSG', team2: 'DC', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { srno: '46',team1: 'SH', team2: 'MI', date: 'March 22, 2025', time: '7:30  PM', venue: 'Eden Gardens, Kolkata, West Bengal' },
  { srno: '47',team1: 'RCB', team2: 'RR', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { srno: '48',team1: 'CSK', team2: 'SH', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { srno: '49',team1: 'KKR', team2: 'PK', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { srno: '50',team1: 'MI', team2: 'LSG', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { srno: '51',team1: 'DC', team2: 'RCB', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { srno: '52', team1: 'RR', team2: 'GT', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { srno: '53', team1: 'DC', team2: 'KKR', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { srno: '54', team1: 'CSK', team2: 'PK', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { srno: '55', team1: 'RR', team2: 'MI', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { srno: '56',team1: 'GT', team2: 'SH', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { srno: '57',team1: 'RCB', team2: 'CSK', date: 'March 22, 2025', time: '7:30  PM', venue: 'Eden Gardens, Kolkata, West Bengal' },
  { srno: '58',team1: 'PK', team2: 'LSG', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { srno: '59',team1: 'SH', team2: 'DC', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { srno: '60', team1: 'MI', team2: 'GT', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { srno: '61',team1: 'KKR', team2: 'CSK', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { srno: '62',team1: 'PK', team2: 'DC', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { srno: '63',team1: 'LSG', team2: 'RCB', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { srno: '64',team1: 'SH', team2: 'KKR', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { srno: '65',team1: 'PK', team2: 'MI', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { srno: '66',team1: 'DC', team2: 'GT', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { srno: '67',team1: 'CSK', team2: 'RR', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
  { srno: '68',team1: 'RCB', team2: 'SH', date: 'March 22, 2025', time: '7:30  PM', venue: 'Eden Gardens, Kolkata, West Bengal' },
  { srno: '69',team1: 'GT', team2: 'LSG', date: 'March 26, 2025', time: '7:30 PM', venue: 'Chinnaswamy Stadium, Bangalore' },
  { srno: '70',team1: 'MI', team2: 'DC', date: 'March 27, 2025', time: '7:30 PM', venue: 'Arun Jaitley Stadium, Delhi' },
  { srno: '71',team1: 'RR', team2: 'PK', date: 'March 28, 2025', time: '7:30 PM', venue: 'PCA Stadium, Mohali' },
  { srno: '72',team1: 'RCB', team2: 'KKR', date: 'March 29, 2025', time: '7:30 PM', venue: 'Ekana Stadium, Lucknow' },
  { srno: '73',team1: 'Gujarat Titans', team2: 'Chennai Super Kings', date: 'March 30, 2025', time: '7:30 PM', venue: 'Eden Gardens, Kolkata' },
  { srno: '1',team1: 'Lucknow Super Giants', team2: 'Sunrisers Hyderabad', date: 'March 31, 2025', time: '7:30 PM', venue: 'MA Chidambaram Stadium, Chennai' },
  { srno: '71',team1: 'Qualifier1', team2: 'Qualifier1', date: 'April 1, 2025', time: '7:30 PM', venue: 'Wankhede Stadium, Mumbai' },
  { srno: '72',team1: 'Eliminator', team2: 'Eliminator', date: 'April 2, 2025', time: '7:30 PM', venue: 'Sawai Mansingh Stadium, Jaipur' },
  { srno: '73',team1: 'Qualifier2', team2: 'Qualifier2', date: 'April 3, 2025', time: '7:30 PM', venue: 'Narendra Modi Stadium, Ahmedabad' },
  { srno: '74',team1: 'Final', team2: 'Final', date: 'April 4, 2025', time: '7:30 PM', venue: 'Rajiv Gandhi Intl. Stadium, Hyderabad' },
];
