import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserTableComponent } from './user-table/user-table.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AngularMatTableComponent } from './angular-mat-table/angular-mat-table.component';
import { CrickHomeComponent } from './crick-home/crick-home.component';
import { CrickContactUSComponent } from './crick-contact-us/crick-contact-us.component';
import { CrickFantasyComponent } from './crick-fantasy/crick-fantasy.component';
import { CrickTeamsComponent } from './crick-teams/crick-teams.component';
import { CrickLivescoreComponent } from './crick-livescore/crick-livescore.component';
import { CrickNewsComponent } from './crick-news/crick-news.component';
import { CrickUpcMatchComponent } from './crick-upc-match/crick-upc-match.component';
import { CrickTeamViewsComponent } from './crick-team-views/crick-team-views.component';
import { LiveScoreViewsComponent } from './live-score-views/live-score-views.component';
import { CrickHighComponent } from './crick-high/crick-high.component';
import { CrickHighDetailsComponent } from './crick-high-details/crick-high-details.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { CrickHomenewsarticleComponent } from './crick-homenewsarticle/crick-homenewsarticle.component';
import { CrickloginComponent } from './cricklogin/cricklogin.component';
import { CrickreguserComponent } from './crickreguser/crickreguser.component';

const routes: Routes = [
  // { path: '', component: HomepageComponent },
  { path: '', component: CrickHomeComponent },
  { path: 'contact', component: CrickContactUSComponent },
  { path: 'fantasy', component: CrickFantasyComponent },
  { path: 'team', component: CrickTeamsComponent },
  { path: 'live-scores', component: CrickLivescoreComponent },
  { path: 'news', component: CrickNewsComponent },
  { path: 'upcoming-matches', component: CrickUpcMatchComponent },
  { path: 'team-details/:id', component: CrickTeamViewsComponent },
  { path: 'match-details/:id', component: LiveScoreViewsComponent },
  { path: 'highlights', component: CrickHighComponent },
  { path: 'highlight-details/:id', component: CrickHighDetailsComponent },
  { path: 'article-details/:id', component: ArticleDetailsComponent }, // Route with dynamic ID
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'article-homenewsdetails/:id', component: CrickHomenewsarticleComponent }, 
  { path: 'login', component: CrickloginComponent }, 
  { path: 'register', component: CrickreguserComponent },


  // { path: 'login', component: LoginComponent },

  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'templatedrivenForm', component: TemplateDrivenComponent },

  { path: 'manageUsertable', component: UserTableComponent },
  { path: 'updateUsertable/:uid', component: UserTableComponent },
  { path: 'detailUsertable/:uid', component: UserTableComponent },


  { path: 'aboutUs', component: AboutUsComponent },

  { path: 'angularMattable', component: AngularMatTableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
