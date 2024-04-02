import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { error } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-demo-app',
  templateUrl: './demo-app.component.html',
  styleUrls: ['./demo-app.component.css']
})
export class DemoAppComponent implements OnInit {

  @Output() dataSubmitted: EventEmitter<any> = new EventEmitter();

  public user: any = {
    fname: '',
    lname: '',
    emailId: '',
    mno: '',
    age: '',
    state: '',
    country: '',
    address: {
      home: {
        address1: '',
        address2: ''
      },
      company: {
        address3: '',
        address4: ''
      }
    },
    tags: '',
    tagsInput: [],
    subscibe: false,
    file: {}

  }

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  public Address = ['Home', 'Company'];
  public item: any = [];
  public submitted = false;
  public modalForm = true;
  public viewflag = false;
  public tdForm: any;
  file: any;
  urlFile = '/assets/img/defaultimg.jpg';

  public photo = {
    id: '',
    photo: { docname: '', docpath: '', docdesc: '', doctype: '', isprimary: 'NO' },
  };
  id: any;

  constructor(
    public routes: Router,
    public restService: RestService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void { }

  public getUserById() {

    // alert('get user by id');
    this.modalForm = false;

    const url = this.restService.userRestURL('details', this.id);
    console.log("Getuserbyid", url);
    this.restService.getJSONFromURL(url).subscribe(
      (response: any) => {

        // alert('working get user by id');
        console.log("Get user by id", JSON.stringify(response));
        console.log("UserDetail-" + JSON.stringify(this.user));

        this.user.fname = response.fname;
        this.user.lname = response.lname;
        this.user.emailId = response.emailId;
        this.user.mno = response.mno;
        this.user.age = response.age;
        this.user.state = response.state;
        this.user.country = response.country;
        this.user.address.home.address1 = response.address.home.address1;
        this.user.address.home.address2 = response.address.home.address2;
        this.user.address.company.address3 = response.address.company.address3;
        this.user.address.company.address4 = response.address.company.address4;
        this.user.tags = response.tags;
        this.user.tagsInput = response.tagsInput;
        this.user.subscibe = response.subscibe;
        this.user.file = response.file;
        // this.urlFile = response.file;

        this.getPhotoById();

      },
      error => {
        console.log("Error message:" + error);
      }
    );

  }

  public getPhotoById() {

    const url = this.restService.userRestURL('upload', this.id);
    console.log("getPhotobyid", url);
    this.restService.getJSONFromURL(url).subscribe(
      (response: any) => {

        // alert('working get user by id');



      },
      error => {
        console.log("Error message:" + error);
      }
    );
  }

  public onSubmit() {
    // Submit form logic here
    // After successful submission, emit an event to notify the parent component

    this.submitted = true;
    console.log("SubmituserData", JSON.stringify(this.user)); // file {} empty

    alert('befoe submit data')

    const url = this.restService.userRestURL('add', '');
    this.restService.postFormData(url, this.user).subscribe(
      (response: any) => {

        alert('submit data');
        console.log('after submit response data', response); // file {} empty
        console.log('after submit user file', this.user.file); // data coming

        // $('.modal-backdrop').hide(); // Solution
        // $('.modal-open').hide; // Solution


        if (this.user.file) {

          alert('photo data');

          this.photo.id = response.id;
          console.log("photo data", this.photo); // data coming in photo {id...}
          // this.user.file = this.photo;


          this.uploadfile();
          // this.photoAdd();
        }

        Swal.fire({
          title: "Data submitted!",
          text: "Successfully!",
          icon: "success"
        });

        this.modalForm = false;
        this.submitted = true;
        this.viewflag = true;
        this.tdForm = true;
        this.id = response.id;


        console.log("ResponseType", typeof (response));
        console.log("items", this.item);

        for (let i in this.user.tagsInput) {
          this.item.push(this.user.tagsInput[i].value);
        }

        console.log("Item", this.item);
        console.log('Status on Post API:' + JSON.stringify(response));
        console.log('Status on Post API:' + JSON.stringify(this.user));

        this.getUserById();

        // this.dataSubmitted.emit(false);
        this.dataSubmitted.closed;


        console.log('id', this.id)


      },
      error => {
        console.log(error);

      }
    );

    return 0;


  }

  public uploadfile() {
    if (this.user.file != '') {

      alert('upload file');
      console.log('userFile', this.user.file);

      const fileExtension = '.' + this.user.file.name.split('.').pop();
      const rname = Math.random().toString(36).substring(7) + new Date().getTime();

      let objDoc = new Object();
      this.photo.photo.docname = this.user.file.name;
      this.photo.photo.doctype = 'IMAGE';
      this.photo.photo.docpath = '/assets/img/image-upload/' + this.photo.id + '/' + rname + this.user.file.name;

      var docFormData = new FormData();
      docFormData.append('doc', this.user.file, rname + this.user.file.name);
      docFormData.append('width', '400');
      docFormData.append('height', '400');
      docFormData.append('name', 'Category' + '/' + this.photo.id);

      // var docurl = this.restService.docsRestURL('upload', '');
      var docurl = this.restService.userRestURL('upload', '');
      console.log(docurl);

      this.restService.uploadFormData(docurl, this.photo).subscribe(
        (response: any) => {

          console.log('Status on Upload API');
          console.log(response);

          return 1;
        },
        error => {
          console.log('Error in doc upload .');
          return 0;
        }
      );


    } else {

      console.log("error", error);

      return 1;
    }
    return 0
  }

  onChangeFileField(event: any) {

    console.log("event target file", event.target.files[0]);
    // this.user.file = event.target.files[0].name;

    alert("alert");

    console.log(event.target.files[0]);

    if (event.target.files[0] != '') {

      alert('event target file');

      this.user.file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event: any) => {
        // image file path
        this.urlFile = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);

      console.log('urlFile' + JSON.stringify(this.urlFile)); //urlFile - "/assets/img/defaultimg.jpg"
      console.log('OnchangefieldUserfile' + JSON.stringify(this.user.file)); // blank object: {}

    }

    // this.restService.uploadImage(this.form.id, this.f).subscribe();

    console.log("userData", JSON.stringify(this.user));
    // console.log("userData", JSON.stringify(this.form));
  }

}
