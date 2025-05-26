import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './config';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // public ip = "https://jsonplaceholder.typicode.com";
  public ip = "http://localhost:3000";
  // public ip = "http://localhost:9090/NaturalHomeoManager";
  // public ip = this.baseUrl;

  // public ip = this.baseUrl;

  public server = this.ip + '/NaturalHomeoManager';
  public docServer = this.ip + '/naturalhomeodocs';
  public imgServer = this.ip + '/naturalhomeodocs';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient, @Inject(API_BASE_URL) public baseUrl?: string) { }

  public getJSONFromURL(url: any) {
    return this.http.get(url);

  }

  public postJSONbyId(url: any, json: any) {
    const headers = new Headers();

    return this.http.post(url, json, this.httpOptions).pipe(
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

  // public uploadImage(image: File) {

  //   alert('upload image');
  //   const formData = new FormData();

  //   formData.append('image', image);

  //   return this.http.post('/assets/img/image-upload/', formData);
  // }

  uploadImage(image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('image', image, image.name);
    return this.http.post<any>('https://api.slingacademy.com/v1/sample-data/photos', formData);
  }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>('https://api.slingacademy.com/v1/sample-data/photos');
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
    // var url = this.server;

    switch (restId) {
      case 'add':
        url += '/user'
        break
      case 'edit':
        url += '/user/update';
        // url += '/user/' + userId;
        break
      case 'upload':
        url += 'document/doc/upload';
        break
      case 'photoGetbyId':
        url += '/upload/' + userId;
        break
      case 'details':
        url += '/user/' + userId;
        break
      case 'delete':
        url += '/user/' + userId;
        break;
      default:
        url += '/user'
        break;

    }
    return url;

  }

}
