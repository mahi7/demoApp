import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../services/rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  // mat table paginator
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name', 'email', 'mno', 'image', 'action'];

  @ViewChild(MatPaginator) paginator: MatPaginator; // Add this line

  public datas: any = [];
  public flag = false;
  public detailFlag = false;
  id: any;

  public userInfo = {
    id: '',
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

  }

  public photo = {
    id: '',
    photo: { docname: '', docpath: '', docdesc: '', doctype: '', isprimary: 'NO' },
  };

  // public user = {
  //   id: '',
  //   albumId: '',
  //   title: '',
  //   url: '',
  //   thumbnailUrl: '',
  //   photofile: ''

  // };

  // docserver images
  public docServer = this.restService.docServer;

  file: any;
  docurll = '/assets/img/defaultimg.jpg';

  constructor(private restService: RestService,
    private routes: Router,
    private routeprms: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {



    this.fetchImages();

    if (this.routeprms.snapshot.params['uid']) {
      this.id = this.routeprms.snapshot.params['uid'];
      // this.userId = this.id;
    }

    if (this.routes.url === '/manageUsertable') {
      this.flag = false;
      this.getUserList();

    }

    if (this.routes.url === '/detailUsertable/' + encodeURIComponent(this.id)) {
      this.flag = true;
      this.detailFlag = true;
      this.getUserById();
    }

    if (this.routes.url === '/updateUsertable/' + encodeURIComponent(this.id)) {
      this.flag = true;
      this.detailFlag = false;
      this.getUserById();
    }
  }

  public getUserList() {

    const url = this.restService.userRestURL('', '');
    this.restService.getJSONFromURL(url).subscribe(
      (response: any) => {
        this.datas = response;

        // Assuming datas is your array of data
        this.dataSource = new MatTableDataSource<any>(this.datas);
        this.dataSource.paginator = this.paginator;

        this.getPhotoById(response.id);

        console.log('userInfo', this.userInfo)

        console.log("getUserLists2:" + JSON.stringify(response));
      },
      error => {
        console.log(error);
      }
    );
  }

  public getUserById() {

    const url = this.restService.userRestURL('details', this.id);
    this.restService.getJSONFromURL(url).subscribe(
      (response: any) => {

        console.log('getuserbyid', response)

        this.userInfo.id = response.id;
        this.userInfo.fname = response.fname;
        this.userInfo.lname = response.lname;
        this.userInfo.email = response.email;
        this.userInfo.mno = response.mno;
        this.userInfo.age = response.age;
        this.userInfo.state = response.state;
        this.userInfo.country = response.country;
        this.userInfo.address = response.address;
        this.userInfo.tags = response.tags;
        this.userInfo.subscibe = response.subscibe;
        // this.userInfo.file = response.file;

        // this.docurll = response.file.name;

        console.log("UserDetail-" + JSON.stringify(this.userInfo));

        this.getPhotoById(response.id);


      },
      error => {
        console.log("Error message:" + error);
      }
    );


  }

  public getPhotoById(id: any) {

    const url = this.restService.userRestURL('upload', this.id);
    console.log("getPhotobyid", url);
    this.restService.getJSONFromURL(url).subscribe(
      (response: any) => {

        // alert('working get user by id');

        console.log('getPhotoResponse', response);
        this.docurll = response[response.id];
        console.log('getPhotobyIdResponse', this.docurll);


      },
      error => {
        console.log("Error message:" + error);
      }
    );
  }


  // fileEvent(fileInput: any) {
  //   if (fileInput.target.files[0] != '') {
  //     this.user.photofile = fileInput.target.files[0].name;
  //     var reader = new FileReader();
  //     reader.onload = (event: any) => {
  //       this.docurll = event.target.result;

  //       console.log('DOCURL' + this.docurll);

  //     }
  //     reader.readAsDataURL(fileInput.target.files[0]);
  //     console.log('Inside multiple file select');
  //   }
  // }

  onChangeFileField(event: any) {

    console.log("event target file", event.target.files[0]);
    // this.user.file = event.target.files[0].name;

    // alert("alert");

    this.docurll = '/assets/img/defaultimg.jpg';


    console.log(event.target.files[0]);

    if (event.target.files[0] != '') {
      this.file = event.target.files[0].name;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.docurll = event.target.result;
        console.log('DOCURL' + JSON.stringify(this.docurll));

      }
      reader.readAsDataURL(event.target.files[0]);
      console.log('Inside multiple file select');
    }

    // this.restService.uploadImage(this.form.id, this.f).subscribe();

    console.log("userData", JSON.stringify(this.userInfo));
  }

  // public submitData() {

  //   const url = this.restService.userRestURL('add', '');
  //   this.restService.postFormData(url, this.userInfo).subscribe(
  //     (response: any) => {
  //       console.log('Status on Post API:' + response);
  //     },
  //     error => {
  //       console.log(error);

  //     }
  //   );

  //   return 0;

  // }

  updateData() {

    // this.user['id'] = this.id;
    this.userInfo['id'] = this.id;

    console.log('submiti function');

    const url = this.restService.userRestURL('edit', '');

    // console.log(this.user);
    console.log("Update user data", this.userInfo);

    this.restService.postJSONbyId(url, this.userInfo).subscribe(
      (response: any) => {
        console.log("updated postform data", response);
        Swal.fire('Updated', '', 'success');

        // this.docurll = response.file;
        this.docurll = '/assets/img/defaultimg.jpg';

        console.log('docurllAfterUpdate', this.docurll);

        this.routes.navigate(['/detailUsertable', response.id]);
        window.scrollTo(0, 0);

      },
      error => {

        console.log('Error in data load.');
      }
    );
    return 0;
  }

  public deleteRole(id: any) {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.value) {
        const url = this.restService.userRestURL('delete', id);
        this.restService.deleteFormData(url).subscribe(
          (response: any) => {

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

            this.getUserList();

          },
          error => {
            Swal.fire(
              error.statusText,
              error._body,
              'error'
            );
          }
        );


      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your data is safe :)',
          'error'
        );
      }
    })
  }

  cancel() {
    this.routes.navigate(['/manageUsertable']);
  }


  // image upload
  images: { url: string }[] = [];
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFile = files[0]; // Assuming you want to upload only the first selected file
    }
  }

  onUpload() {
    alert('upload');
    if (this.selectedFile) {
      this.restService.uploadImage(this.selectedFile).subscribe(() => {
        this.fetchImages(); // Refresh image list after upload
      });
    }
  }

  fetchImages() {
    // alert('fetch images');
    this.restService.getImages().subscribe((dataaa: any) => {
      this.images = dataaa.photos.map((item: any) => ({ url: item.url })); // Assuming each item in dataaa has a photos array with at least one URL
      console.log('images', JSON.stringify(this.images));
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
