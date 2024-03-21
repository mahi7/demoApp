import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  [x: string]: any;

  public submitted = false;
  public boolean = false;
  public viewflag = false;
  public tdForm: any;
  public item: any = [];

  @ViewChild('f') public resetForm: NgForm | undefined;

  public data: any = [];

  public userInfo = {
    fname: '',
    lname: '',
    emailId: '',
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
    emailId: '',
    mno: '',
    age: '',
    state: '',
    country: '',
    address: '',
    tags: '',
    tagsInput: [],
    subscibe: false,
    file: ''

  }

  form: FormGroup = new FormGroup({
    fname: new FormControl(''),
    lname: new FormControl(''),
    emailId: new FormControl(''),
    mno: new FormControl(''),
    age: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    address: new FormControl(''),
    tags: new FormControl(''),
    subscibe: new FormControl(false),
    file: new FormControl(''),
  });

  // public user = {
  //     albumId: '',
  //     title: '',
  //     url: '',
  //     thumbnailUrl: 'D:\ionic_Angular_project\UserInfo\src\assets\img\pexels-jessica-lewis-🦋-thepaintedsquare-583848.jpg'
  // }

  file: any;
  urlFile = '/assets/img/defaultimg.jpg';
  userid: any;
  firmid: any;
  id: any;
  public edituser = false;
  public modalForm = true;

  constructor(
    public routes: Router,
    public restService: RestService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {

    this.form = this.formBuilder.group(
      {
        fname: ['', [
          Validators.required,
          Validators.pattern,
        ]],
        lname: ['', Validators.required],
        emailId: ['', Validators.required],
        mno: ['', Validators.required],
        age: ['', Validators.required],
        state: ['', Validators.required],
        country: ['', Validators.required],
        address: ['', Validators.required],
        tags: ['', Validators.required],
        subscibe: [false, Validators.requiredTrue],
        file: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
      }
    );

    console.log('hello ngoninit');

    // this.defaultImage();

    // this.getUserById();

  }

  defaultImage() {
    this.user.file = '/assets/img/defaultimg.avif';
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
        console.log("UserDetail-" + JSON.stringify(this.user));

        this.user.fname = response.fname;
        this.user.lname = response.lname;
        this.user.emailId = response.emailId;
        this.user.mno = response.mno;
        this.user.age = response.age;
        this.user.state = response.state;
        this.user.country = response.country;
        this.user.address = response.address;
        this.user.tags = response.tags;
        this.user.tagsInput = response.tagsInput;
        this.user.subscibe = response.subscibe;
        this.user.file = response.file;
        // this.urlFile = response.file;

      },
      error => {
        console.log("Error message:" + error);
      }
    );

  }

  // template driven form submit
  public submitData(f: NgForm) {

    console.log("Typeof", typeof (this.item));
    console.log("Typeof", typeof (this.user.tagsInput));


    this.submitted = true;
    console.log("SubmituserData", JSON.stringify(this.user));

    const url = this.restService.userRestURL('add', '');
    this.restService.postFormData(url, this.user).subscribe(
      (response: any) => {

        alert('submit data');

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


        this.getUserById();

        console.log('id', this.id)

        console.log('Status on Post API:' + JSON.stringify(response));
        console.log('Status on Post API:' + JSON.stringify(this.user));

      },
      error => {
        console.log(error);

      }
    );

    return 0;

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

        this.user.file = response.file;
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
    this.urlFile = '/assets/img/defaultimg.jpg';
  }

  resetOnSubmit(f: NgForm): void {
    this.submitted = false;
    f.reset();
    this.urlFile = '/assets/img/defaultimg.jpg';
  }

  fileEvent(fileInput: any) {

    alert("alert");

    console.log(fileInput.target.files[0]);

    if (fileInput.target.files[0] != '') {
      this.file = fileInput.target.files[0].name;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.urlFile = event.target.result;
        // this.urlFile = this.file;
        console.log('DOCURL' + JSON.stringify(this.urlFile));

      }
      reader.readAsDataURL(fileInput.target.files[0]);
      console.log('Inside multiple file select');
    }
  }

  onChangeFileField(event: any) {

    console.log("event target file", event.target.files[0]);
    // this.user.file = event.target.files[0].name;

    alert("alert");

    console.log(event.target.files[0]);

    if (event.target.files[0] != '') {
      this.user.file = event.target.files[0].name;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.urlFile = event.target.result;
        console.log('DOCURL' + JSON.stringify(this.urlFile));

      }
      reader.readAsDataURL(event.target.files[0]);
      console.log('Inside multiple file select');
    }

    // this.restService.uploadImage(this.form.id, this.f).subscribe();

    console.log("userData", JSON.stringify(this.user));
    console.log("userData", JSON.stringify(this.form));
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

    this.item = [];
    console.log("userUpdataData", JSON.stringify(this.user));

    const url = this.restService.userRestURL('edit', '');

    this.restService.postFormData(url, this.user).subscribe(
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

}
