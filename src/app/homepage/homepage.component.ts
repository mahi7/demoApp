import { Component, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { DemoAppComponent } from '../demo-app/demo-app.component';
import { find, get, pull } from 'lodash';

import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { error, event } from 'jquery';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  [x: string]: any;

  // docserver images
  public docServer = this.restService.docServer;

  @ViewChild('tagInput') tagInputRef: ElementRef;

  announcer = inject(LiveAnnouncer);

  @ViewChild('MyModal') modal: ElementRef;

  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }

  public submitted = false;
  public boolean = false;
  public viewflag = false;
  public tdForm: any;
  public item: any = [];
  public jQuery: any;

  public Address = ['Address', 'Home', 'Company'];

  @ViewChild('f') public resetForm: NgForm | undefined;

  public data: any = [];

  public userInfo = {
    fname: '',
    lname: '',
    email: '',
    mno: '',
    age: '',
    state: '',
    country: '',
    address: '',
    tags: '',
    subscibe: false,
    file: ''

  }

  public user: any = {
    fname: '',
    lname: '',
    email: '',
    mno: '',
    age: '',
    state: '',
    country: '',
    address: {
      addressType: '',
      address1: '',
      address2: '',
      address3: '',
      address4: ''

      // home: {
      //   address1: '',
      //   address2: ''
      // },
      // company: {
      //   address3: '',
      //   address4: ''
      // }
    },
    tagsInput: [],
    subscribe: false,

  }

  public photo = {
    id: '',
    photo: { docname: '', docpath: '', docdesc: '', doctype: '', isprimary: 'NO' },
  };

  form: FormGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    email: new FormControl(''),
    mno: new FormControl(''),
    age: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    address: new FormControl(''),
    tags: new FormControl(''),
    subscibe: new FormControl(false),
    file: new FormControl(''),
  });

  file: any;

  // public docurll:any;
  docurll = '/assets/img/defaultimg.jpg';
  // docurll = '/assets/img/defaultimg.jpg';

  userid: any;
  firmid: any;
  id: any;
  public edituser = false;
  public modalForm = true;

  public validModel = true;

  constructor(
    public routes: Router,
    public restService: RestService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {

    // this.form = this.formBuilder.group(
    //   {
    //     fname: ['', [
    //       Validators.required,
    //       Validators.pattern,
    //     ]],
    //     lname: ['', Validators.required],
    //     email: ['', Validators.required],
    //     mno: ['', Validators.required],
    //     age: ['', Validators.required],
    //     state: ['', Validators.required],
    //     country: ['', Validators.required],
    //     address: ['', Validators.required],
    //     tags: ['', Validators.required],
    //     subscibe: [false, Validators.requiredTrue],
    //     file: ['', Validators.required],
    //     // acceptTerms: [false, Validators.requiredTrue]
    //   }
    // );


    console.log('hello ngoninit');

    // this.defaultImage();

    // this.getUserById();

  }

  defaultImage() {
    this.file = '/assets/img/defaultimg.avif';
  }

  get f(): { [key: string]: AbstractControl } {

    return this.form.controls;

  }

  public getUserById() {

    // alert('get user by id');
    this.modalForm = false;

    const url = this.restService.userRestURL('details', this.id);
    console.log("Getuserbyid", url);
    this.restService.getJSONFromURL(url).subscribe(
      (response: any) => {

        // alert('working get user by id');
        console.log("Get user by id", JSON.stringify(response));

        this.user = response;
        console.log("UserDetail-" + JSON.stringify(this.user));

        this.user.fname = response.fname;
        this.user.lname = response.lname;
        this.user.email = response.email;
        this.user.mno = response.mno;
        this.user.age = response.age;
        this.user.state = response.state;
        this.user.country = response.country;
        this.user.address.address1 = response.address.address1;
        this.user.address.address2 = response.address.address2;
        this.user.address.address3 = response.address.address3;
        this.user.address.address4 = response.address.address4;
        this.user.tagsInput = response.tagsInput;
        this.user.subscribe = response.subscribe;
        // this.file = response.file;
        // this.docurll = response.file;

        if (response.photo) {
          this.docurll = this.docServer + '/' + response.photo.docpath;
        }

        // this.getPhotoById();

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

  // template driven form submit
  public submitData(f: NgForm) {


    this.submitted = true;
    console.log("SubmituserData", JSON.stringify(this.user)); // file {} empty

    // alert('befoe submit data')

    const url = this.restService.userRestURL('add', '');
    this.restService.postFormData(url, this.user).subscribe(
      (response: any) => {

        // alert('submit data');
        console.log('after submit response data', response); // file {} empty
        console.log('after submit user file', this.file); // data coming

        // $('.modal-backdrop').hide(); // Solution
        // $('.modal-open').hide; // Solution

        if (this.file) {

          this.photo.id = response.id;
          console.log("photo data", this.photo); // data coming in photo {id...}

          // this.uploadfile();
          this.photoAdd();
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

        console.log('id', this.id)

      },
      error => {
        console.log(error);

      }
    );

    return 0;

  }


  private photoAdd() {

    this.uploadfile();

    this.file = this.photo;

    console.log("photo", + this.photo);
    console.log("userfile after upload", + this.file);

    const url = this.restService.userRestURL('edit', '');
    this.restService.postFormData(url, this.file).subscribe(
      (response: any) => {

        console.log('Status on Post API', response); //only photo response coming
        Swal.fire('Added', '', 'success');
        window.scrollTo(0, 0);

      },
      error => {

        Swal.fire(
          error.statusText,
          error._body,
          'error'
        );

      }
    );
    return 0;
  }

  public uploadfile() {
    if (this.file != '') {

      // alert('upload file');
      console.log('userFile', this.file);

      const fileExtension = '.' + this.file.name.split('.').pop();
      const rname = Math.random().toString(36).substring(7) + new Date().getTime();

      let objDoc = new Object();
      this.photo.photo.docname = this.file.name;
      this.photo.photo.doctype = 'IMAGE';
      this.photo.photo.docpath = 'webapps/ROOT/images/' + this.photo.id + '/' + rname + this.file.name;

      // this.photo.photo.docname = this.file.name;
      // this.photo.photo.doctype = 'IMAGE';
      // this.photo.photo.docpath = 'Category/' + this.prodtypeid + '/' + rname + this.file.name;

      var docFormData = new FormData();
      docFormData.append('doc', this.file, rname + this.file.name);
      docFormData.append('width', '310');
      docFormData.append('height', '325');
      docFormData.append('name', 'webapps/ROOT/images' + '/' + this.photo.id);

      // var docurll = this.restService.docsRestURL('upload', '');
      var docurll = this.restService.userRestURL('upload', '');
      console.log(docurll);

      this.restService.uploadFormData(docurll, docFormData).subscribe(
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

  // reactive form submit
  onSubmit() {

    console.log('reactive form', this.form.value);
    alert('Reactive submit');

    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    const url = this.restService.userRestURL('add', '');
    this.restService.postFormData(url, this.form.value).subscribe(
      (response: any) => {

        console.log('Status on Post API:' + JSON.stringify(response));

        alert('submit data');

        Swal.fire({
          title: "Data submitted!",
          text: "Successfully!",
          icon: "success"
        });

        this.file = response.file;
        this.submitted = true;
        this.viewflag = true;
        this.tdForm = true;
        this.id = response.id;
        this.form = response;

        this.getUserById();

        console.log('Status on Post API:' + JSON.stringify(response));

      },
      error => {
        console.log(error);

      }
    );

    this.onReset();

    return 0;


    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.docurll = '/assets/img/defaultimg.jpg';
  }

  resetOnSubmit(f: NgForm): void {
    this.submitted = false;
    f.reset();
    this.docurll = '/assets/img/defaultimg.jpg';
  }

  fileEvent(fileInput: any) {

    alert("alert");

    console.log(fileInput.target.files[0]);

    if (fileInput.target.files[0] != '') {
      this.file = fileInput.target.files[0].name;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.docurll = event.target.result;
        // this.docurll = this.file;
        console.log('docurll' + JSON.stringify(this.docurll));

      }
      reader.readAsDataURL(fileInput.target.files[0]);
      console.log('Inside multiple file select');
    }
  }

  onChangeFileField(event: any) {

    console.log("event target file", event.target.files[0]);
    // this.file = event.target.files[0].name;

    // alert("alert");

    console.log(event.target.files[0]);

    if (event.target.files[0] != '') {

      // alert('event target file');

      this.photo.photo = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event: any) => {
        // image file path
        // this.docurll = event.target.result;
        this.docurll = event.target.result;

      }

      reader.readAsDataURL(event.target.files[0]);

      console.log('docurll' + JSON.stringify(this.docurll)); //docurll - "/assets/img/defaultimg.jpg"
      console.log('OnchangefieldUserfile' + JSON.stringify(this.file)); // blank object: {}

    }

    // this.restService.uploadImage(this.form.id, this.f).subscribe();

    console.log("userData", JSON.stringify(this.user));
    // console.log("userData", JSON.stringify(this.form));
  }

  editUser() {
    this.viewflag = false;
    this.edituser = true;
  }

  cancel() {
    this.viewflag = true;
    this.edituser = false;
  }

  updateData() {

    this.user['id'] = this.id;
    this.item = [];
    console.log("userUpdataData", JSON.stringify(this.user));

    const url = this.restService.userRestURL('edit', '');

    this.restService.postJSONbyId(url, this.user).subscribe(
      (response: any) => {
        console.log(response);
        Swal.fire('Updated', '', 'success');

        for (let i in this.user.tagsInput) {
          this.item.push(this.user.tagsInput[i].value);
        }

        console.log("Item", this.item);

        this.viewflag = true;
        this.edituser = false;

      },
      error => {

        console.log('Error in data load.');
      }
    );
    return 0;
  }

  // add tags new method
  public newTag: string = '';
  tags: string[] = [];

  addTag() {

    if (this.newTag.trim() !== '' && !this.user.tagsInput.includes(this.newTag)) {
      // alert('add tag');
      this.user.tagsInput.push(this.newTag);
      this.newTag = '';
      this.newTag.trim();

      console.log('addtag', this.user.tagsInput);

    }
  }

  removeTag(tagToRemove: string, f: NgForm) {

    if (this.user.tagsInput.length == 0) {
      f.form.invalid;
    }

    this.user.tagsInput = this.user.tagsInput.filter((newTag: any) => newTag !== tagToRemove);

    console.log('remove tag', this.user.tagsInput);
  }

  //tag input placeholder
  inputValue = '';
  showPlaceholder = true;

  onInputChange(value: string) {
    this.newTag = value;
    this.newTag.trim();
    // this.newTag = '';
    this.showPlaceholder = value === '';
  }
  // end


  // toggle div address
  showDiv = false;
  remDiv = false;
  // defaultDiv = false;

  toggleDiv(action: string) {
    if (action === 'HOME') {

      this.user.address.addressType = 'HOME';

      this.showDiv = true;
      this.remDiv = false;
      // this.defaultDiv = false;

    } else if (action === 'COMPANY') {

      this.user.address.addressType = 'COMPANY';

      this.showDiv = false;
      this.remDiv = true;
      // this.defaultDiv = false;

    } else if (action === 'addr') {

      this.user.address.addressType = '';

      this.showDiv = false;
      this.remDiv = false;
    }
  }

  getErrorMessage() {
    if (this.user.age.hasError('required')) {
      return 'Slider value is required';
    }
    if (this.user.age.hasError('min') || this.user.age.hasError('max')) {
      return 'Slider value must be between 0 and 100';
    }
    return '';
  }

}
