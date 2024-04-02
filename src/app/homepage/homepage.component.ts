import { Component, ElementRef, EventEmitter, OnInit, Output, TemplateRef, ViewChild, inject } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DemoAppComponent } from '../demo-app/demo-app.component';


import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';
import { error } from 'jquery';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  [x: string]: any;

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
  // public home = false;
  // public company = false;
  public Address = ['Home', 'Company'];

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

  public photo = {
    id: '',
    photo: { docname: '', docpath: '', docdesc: '', doctype: '', isprimary: 'NO' },
  };

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

  public validModel = true;

  closeModalEvent = new EventEmitter<boolean>();

  constructor(
    public routes: Router,
    public restService: RestService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
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

  // new impplementation
  openDialog() {
    const dialogRef = this.dialog.open(DemoAppComponent, {
      width: '550px',
    });

    dialogRef.componentInstance.dataSubmitted.subscribe((submitted: boolean) => {
      if (submitted) {
        dialogRef.close(); // Close the modal after successful submission
      }
    });
  }

  // openDialog() {
  //   const dialogRef = this.dialog.open(DemoAppComponent);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });


  // }
  // new impplementation end  


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

  // template driven form submit
  public submitData(f: NgForm) {


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

        console.log('id', this.id)

        this.closeModal();

      },
      error => {
        console.log(error);

      }
    );

    return 0;

  }

  closeModal() {
    // Check if the modal element exists
    if (this.modal) {
      alert('closeModal');

      // Use nativeElement to access the actual DOM element
      this.modal.nativeElement.dismiss(this.modal);
      // this.modal.nativeElement.classList.remove(this.modal);
      this.modal.nativeElement.style.display = 'none';
    }
  }

  // private photoAdd() {

  //   this.uploadfile();

  //   this.user.file = this.photo;

  //   console.log("photo", + this.photo);
  //   console.log("userfile after upload", + this.user.file);

  //   const url = this.restService.userRestURL('edit', '');
  //   this.restService.postFormData(url, this.user.file).subscribe(
  //     (response: any) => {

  //       console.log('Status on Post API', response); //only photo response coming
  //       Swal.fire('Added', '', 'success');
  //       window.scrollTo(0, 0);

  //     },
  //     error => {

  //       Swal.fire(
  //         error.statusText,
  //         error._body,
  //         'error'
  //       );

  //     }
  //   );
  //   return 0;
  // }

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

  onCloseModal(event: any) {
    alert('onclosemodel');
    if (this.submitted == true) {

      this['event'] = false;
      this.validModel = true;
      this.closeModalEvent.emit(false);

    } else {
      this['event'] = true;
      this.closeModalEvent.emit(true);
      this.validModel = true;
      // $('.modal-backdrop').remove(); 
      $('.modal-open').closest;

    }
  }


  // ng bootstrap modal
  private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		switch (reason) {
			case ModalDismissReasons.ESC:
				return 'by pressing ESC';
			case ModalDismissReasons.BACKDROP_CLICK:
				return 'by clicking on a backdrop';
			default:
				return `with: ${reason}`;
		}
	}

}
