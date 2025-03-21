import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickTeamViewsComponent } from './crick-team-views.component';

describe('CrickTeamViewsComponent', () => {
  let component: CrickTeamViewsComponent;
  let fixture: ComponentFixture<CrickTeamViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickTeamViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickTeamViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
