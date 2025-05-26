import { Component } from '@angular/core';

@Component({
  selector: 'app-crickhead',
  templateUrl: './crickhead.component.html',
  styleUrls: ['./crickhead.component.css']
})
export class CrickheadComponent {

  isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    const theme = this.isDarkTheme ? 'dark-theme' : 'light-theme';
    document.body.className = theme;
  }

}
