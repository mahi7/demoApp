import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchscheTableComponent } from './matchsche-table.component';

describe('MatchscheTableComponent', () => {
  let component: MatchscheTableComponent;
  let fixture: ComponentFixture<MatchscheTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchscheTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchscheTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
