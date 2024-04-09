import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{

  panelOpenState = false;
  urlFile = '/assets/img/aboutUs.jpg';

  // value: any[] | undefined;
  // images: any[];

  //   get activeIndex(): number {
  //       return this._activeIndex;
  //   }

  //   set activeIndex(newValue) {
  //       if (this.images && 0 <= newValue && newValue <= this.images.length - 1) {
  //           this._activeIndex = newValue;
  //       }
  //   }

  //   _activeIndex: number = 2;

  //   responsiveOptions: any[] = [
  //       {
  //           breakpoint: '1024px',
  //           numVisible: 5
  //       },
  //       {
  //           breakpoint: '768px',
  //           numVisible: 3
  //       },
  //       {
  //           breakpoint: '560px',
  //           numVisible: 1
  //       }
  //   ];

    constructor(private photoService: RestService) {}

    ngOnInit() {
        // this.photoService.getImages().then((images) => (this.images = images));
    }

    // next() {
    //     this.activeIndex++;
    // }

    // prev() {
    //     this.activeIndex--;
    // }

}
