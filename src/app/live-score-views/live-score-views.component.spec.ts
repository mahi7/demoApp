import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveScoreViewsComponent } from './live-score-views.component';

describe('LiveScoreViewsComponent', () => {
  let component: LiveScoreViewsComponent;
  let fixture: ComponentFixture<LiveScoreViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveScoreViewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveScoreViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
