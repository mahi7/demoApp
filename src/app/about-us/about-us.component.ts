import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  panelOpenState = false;
  urlFile = '/assets/img/aboutUs.jpg';

  constructor(private photoService: RestService) { }

  ngOnInit() {
  }

  // image see more
  images: { url: string }[] = [
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    },
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    },
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    },
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    },
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    },
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    },
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    },
    {
      url:'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/bcci/story/1712065673_200x200_97348_1712065672.JPG'
    }
  ]; // Assuming this is your array of images
  showRemainingImages: boolean = false;

  toggleRemainingImages() {
    this.showRemainingImages = !this.showRemainingImages;
  }


}
