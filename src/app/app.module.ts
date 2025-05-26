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
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { TagInputModule } from 'ngx-chips';
import { AboutUsComponent } from './about-us/about-us.component';
import { AngularMatTableComponent } from './angular-mat-table/angular-mat-table.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { DemoAppComponent } from './demo-app/demo-app.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { SubHeaderComponent } from './header/sub-header/sub-header.component';

// import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { API_BASE_URL, ConfigFactory, ConfigService } from './services/config';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatchscheTableComponent } from './matchsche-table/matchsche-table.component';
import { MatchViewDialogComponent } from './match-view-dialog/match-view-dialog.component';
import { CrickHomeComponent } from './crick-home/crick-home.component';
import { CrickheadComponent } from './crickhead/crickhead.component';
import { CrickContactUSComponent } from './crick-contact-us/crick-contact-us.component';
import { CrickFantasyComponent } from './crick-fantasy/crick-fantasy.component';
import { CrickTeamsComponent } from './crick-teams/crick-teams.component';
import { CrickLivescoreComponent } from './crick-livescore/crick-livescore.component';
import { CrickNewsComponent } from './crick-news/crick-news.component';
import { CrickFootComponent } from './crick-foot/crick-foot.component';
import { CrickUpcMatchComponent } from './crick-upc-match/crick-upc-match.component';
import { CrickTeamViewsComponent } from './crick-team-views/crick-team-views.component';
import { LiveScoreViewsComponent } from './live-score-views/live-score-views.component';
import { CrickHighComponent } from './crick-high/crick-high.component';
import { CrickHighDetailsComponent } from './crick-high-details/crick-high-details.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CrickHomenewsarticleComponent } from './crick-homenewsarticle/crick-homenewsarticle.component';
import { CrickloginComponent } from './cricklogin/cricklogin.component';
import { CrickreguserComponent } from './crickreguser/crickreguser.component';

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
    DemoAppComponent,
    SubHeaderComponent,
    MatchscheTableComponent,
    MatchViewDialogComponent,
    CrickHomeComponent,
    CrickheadComponent,
    CrickContactUSComponent,
    CrickFantasyComponent,
    CrickTeamsComponent,
    CrickLivescoreComponent,
    CrickNewsComponent,
    CrickFootComponent,
    CrickUpcMatchComponent,
    CrickTeamViewsComponent,
    LiveScoreViewsComponent,
    CrickHighComponent,
    CrickHighDetailsComponent,
    ArticleDetailsComponent,
    CrickHomenewsarticleComponent,
    CrickloginComponent,
    CrickreguserComponent,
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
    MatSortModule,
    MatButtonModule,
    TagInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatButtonModule,
    MatDialogModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireModule.initializeApp({
    //   apiKey: environment.firebaseConfig.apiKey,
    //   authDomain: environment.firebaseConfig.authDomain,
    // }),

    MatFormFieldModule, MatSelectModule, TagInputModule, MatDialogModule,MatCardModule, MatButtonModule,MatChipsModule,
    MDBBootstrapModule.forRoot(),
    NgbModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ConfigService,{ provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'CONFIGPATH', useValue: './assets/config.json' },
    { provide: 'APIURL-VAR', useValue: 'API_BASE_URL' },
    {
      provide: API_BASE_URL, useFactory: ConfigFactory,
      deps: [ConfigService, 'CONFIGPATH', 'APIURL-VAR']
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
