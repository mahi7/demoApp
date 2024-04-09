import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // public ip = "https://jsonplaceholder.typicode.com";
  public ip = "http://localhost:3000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  public getJSONFromURL(url: any) {
    return this.http.get(url);

  }

  public postJSONbyId(url: any, json: any) {
    const headers = new Headers();

    return this.http.put(url, json, this.httpOptions).pipe(
      map(res => {
        const postresponse = res;
        console.log("Postresponse:" + postresponse)
        return postresponse;
      })
    );

  }

  public postFormData(url: any, json: any) {
    const headers = new Headers();

    return this.http.post(url, json, this.httpOptions).pipe(
      map(res => {
        const postresponse = res;
        console.log("Postresponse:" + postresponse)
        return postresponse;
      })
    );
  }

  public uploadImage(image: File) {

    alert('upload image');
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/assets/img/image-upload/', formData);
  }

  public docsRestURL(restid: any, type: any) {
    let url = this.ip;
    // let url = '/assets/img/';
    switch (restid) {


      case 'upload':
        url += '/upload';
        break;

    }
    return url;
  }

  public uploadFormData(url: any, formdata: any) {
    const headers = new Headers();

    return this.http.post(url, formdata)
      .pipe(map(res => {
        const postresponse = res;
        console.log('service method: ' + postresponse);
        return postresponse;
      }));
  }

  public deleteFormData(url: any) {

    return this.http.delete(url).pipe(
      map(res => {
        const deleteresponse = res; // .json();
        return deleteresponse;
      })
    );

  }

  public userRestURL(restId: any, userId: any) {
    var url = this.ip;

    switch (restId) {
      case 'add':
        url += '/photos'
        break
      case 'edit':
        url += '/photos/' + userId;
        break
      case 'upload':
        url += '/upload';
        break
      case 'photoGetbyId':
        url += '/upload/' + userId;
        break
      case 'details':
        url += '/photos/' + userId;
        break
      case 'delete':
        url += '/photos/' + userId;
        break;
      default:
        url += '/photos'
        break;

    }
    return url;

  }

  sendWithAttachment(userData: any) {

    this.http.post("http://localhost:3000/uploadfile", userData
    )
      .subscribe(
        data => {
          console.log("Sent Request is successful ", data);
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  // getData() {
  //   return [
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
  //       alt: 'Description for Image 1',
  //       title: 'Title 1'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria2s.jpg',
  //       alt: 'Description for Image 2',
  //       title: 'Title 2'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria3s.jpg',
  //       alt: 'Description for Image 3',
  //       title: 'Title 3'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria4s.jpg',
  //       alt: 'Description for Image 4',
  //       title: 'Title 4'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria5s.jpg',
  //       alt: 'Description for Image 5',
  //       title: 'Title 5'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria6s.jpg',
  //       alt: 'Description for Image 6',
  //       title: 'Title 6'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria7s.jpg',
  //       alt: 'Description for Image 7',
  //       title: 'Title 7'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria8s.jpg',
  //       alt: 'Description for Image 8',
  //       title: 'Title 8'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria9s.jpg',
  //       alt: 'Description for Image 9',
  //       title: 'Title 9'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria10s.jpg',
  //       alt: 'Description for Image 10',
  //       title: 'Title 10'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria11s.jpg',
  //       alt: 'Description for Image 11',
  //       title: 'Title 11'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria12s.jpg',
  //       alt: 'Description for Image 12',
  //       title: 'Title 12'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria13s.jpg',
  //       alt: 'Description for Image 13',
  //       title: 'Title 13'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria14s.jpg',
  //       alt: 'Description for Image 14',
  //       title: 'Title 14'
  //     },
  //     {
  //       itemImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15.jpg',
  //       thumbnailImageSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria15s.jpg',
  //       alt: 'Description for Image 15',
  //       title: 'Title 15'
  //     }
  //   ];
  // }

  // getImages() {
  //   return Promise.resolve(this.getData());
  // }
}
