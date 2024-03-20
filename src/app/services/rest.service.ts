import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  // public ip = "https://jsonplaceholder.typicode.com";
  public ip = "http://localhost:3000";

  // public server = this.ip + '/NaturalHomeoManager';
  // public docServer = this.ip + '/naturalhomeodocs';
  public imgServer = this.ip + '/naturalhomeodocs';

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

  public docsRestURL(restid: any, type: any) {
    // let url = this.ip;
    let url = '/assets/img/';
    switch (restid) {
      case 'add':
        url += '/doc';
        break;
      case 'productphotoadd':
        url += '/product/photos ';
        break;
      case 'photoadd':
        url += '/employee/photo';
        break;
      case 'edit':
        url += '/doc/update';
        break;
      case 'delete':
        url += '/doc/delete';
        break;
      case 'upload':
        url += '';
        break;
      case 'details':
        url += '/doc/getId/' + type;
        break;
      default:
        url += '/doc?type=' + type;
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

  // public uploadImage(id:any, file: File){
  //   const formData = new FormData();
  //   formData.append('profileUrl', file);

  //   return this.http.post(this.ip + '/imageUpload/'+id, formData, {responseType:'text'});
  // }

  // public getRelativePath(relativePath:string){
  //   return '${this.ip}/${relativePath}';
  // }

  public deleteFormData(url:any) {
   
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
}
