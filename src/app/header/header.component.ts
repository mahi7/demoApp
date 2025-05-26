import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    
  ) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true)
  }

  scroll = (): void => {

    let scrollHeigth;
 
    if(window.innerWidth < 350){
     scrollHeigth = 50;
    }else if(window.innerWidth < 500 && window.innerWidth > 350){
     scrollHeigth = 50;
    }else if(window.innerWidth < 700 && window.innerWidth > 500){
     scrollHeigth = 50;
    }else if(window.innerWidth < 1000 && window.innerWidth > 700){
     scrollHeigth = 50;
    }else{
      scrollHeigth = 50;
    }
 
     if(window.scrollY >= scrollHeigth){
       document.body.style.setProperty('--navbar-scroll', "white");
       document.body.style.setProperty('--navbar-scroll-text', "black");
       document.body.style.setProperty('--navbar-scroll-shadow', "0px 6px 12px -5px #000000");
     }else if(window.scrollY < scrollHeigth){
       document.body.style.setProperty('--navbar-scroll', "transparent");
       document.body.style.setProperty('--navbar-scroll-text', "white");
       document.body.style.setProperty('--navbar-scroll-shadow', "none");
     }
   }  

}
