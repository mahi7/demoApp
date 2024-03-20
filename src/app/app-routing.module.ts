import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserTableComponent } from './user-table/user-table.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },

  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'templatedrivenForm', component: TemplateDrivenComponent },

  { path: 'manageUsertable', component: UserTableComponent },
  { path: 'updateUsertable/:uid', component: UserTableComponent },
  { path: 'detailUsertable/:uid', component: UserTableComponent },


  { path: 'aboutUs', component: AboutUsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
