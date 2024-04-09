import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserTableComponent } from './user-table/user-table.component';
import { LoginComponent } from './login/login.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { TagInputModule } from 'ngx-chips';
import { AboutUsComponent } from './about-us/about-us.component';
import { AngularMatTableComponent } from './angular-mat-table/angular-mat-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
// import { CarouselModule } from 'primeng/carousel';
// import { GalleriaModule } from 'primeng/galleria';
// import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    UserTableComponent,
    LoginComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    AboutUsComponent,
    AngularMatTableComponent,
    DemoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatSliderModule,
    MatPaginatorModule,
    MatButtonModule,
    TagInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    // CarouselModule,
    MatExpansionModule,
    
    // GalleriaModule,
    // ButtonModule,
    MatFormFieldModule, MatSelectModule, TagInputModule, MatDialogModule,MatCardModule, MatButtonModule,MatChipsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
