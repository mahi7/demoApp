import { AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatchViewDialogComponent } from '../match-view-dialog/match-view-dialog.component';

export interface MatchData {
  srno: string;
  team: string;
  date: string;
  time: string;
  venue: string;
}

@Component({
  selector: 'app-matchsche-table',
  templateUrl: './matchsche-table.component.html',
  styleUrls: ['./matchsche-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchscheTableComponent implements AfterViewInit{

  dataSource = new MatTableDataSource<MatchData>([
    { srno: "1", team: "KKR vs RCB", date: "22-03-2025", time: "7:30 pm", venue: "Eden Garden" },
    { srno: "2", team: "CSK vs MI", date: "23-03-2025", time: "7:30 pm", venue: "MA Chidambaram Stadium" },
    { srno: "3", team: "SRH vs DC", date: "18-01-2025", time: "4 pm", venue: "Rajiv Gandhi Stadium" },
    { srno: "4", team: "PBKS vs RR", date: "20-01-2025", time: "6 pm", venue: "Mohali" },
    { srno: "5", team: "LSG vs GT", date: "25-01-2025", time: "8 pm", venue: "Ekana Stadium" },
    { srno: "6", team: "KKR vs CSK", date: "28-01-2025", time: "3 pm", venue: "Eden Garden" },
    { srno: "7", team: "RCB vs MI", date: "30-01-2025", time: "5 pm", venue: "Chinnaswamy" },
    { srno: "8", team: "DC vs RR", date: "02-02-2025", time: "2 pm", venue: "Arun Jaitley Stadium" },
    { srno: "9", team: "SRH vs LSG", date: "05-02-2025", time: "7 pm", venue: "Hyderabad" },
    { srno: "10", team: "GT vs PBKS", date: "07-02-2025", time: "6 pm", venue: "Ahmedabad" },
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;  // ✅ Correctly assign paginator here
  }

  // public datas: any = [
  //   {srno:"1", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"2", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"3", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"4", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"5", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"6", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"7", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"8", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"9", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  //   {srno:"10", team:"KKR vs RCB", date:"12-01-2025", time:"12 pm", venue:"Eden Garden"},
  // ];


  // mat table paginator
  // dataSource: MatTableDataSource<any>;
  // dataSource = new MatTableDataSource<any>(this.datas);
  displayedColumns: string[] = ['srno', 'team', 'date', 'time', 'venue', 'action'];

  // @ViewChild(MatPaginator) paginator: MatPaginator; // Add this line

  // ngOnInit(): void {
  //    console.log("Datas", this.datas);

  //    // Assuming datas is your array of data
  //    this.dataSource = new MatTableDataSource<any>(this.datas);
  //    this.dataSource.paginator = this.paginator;
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(MatchViewDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

