import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickTeamsComponent } from './crick-teams.component';

describe('CrickTeamsComponent', () => {
  let component: CrickTeamsComponent;
  let fixture: ComponentFixture<CrickTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
