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
        url += '/photos'
        break
      case 'upload':
        url += '/upload'
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
}
