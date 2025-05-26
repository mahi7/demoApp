import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickreguserComponent } from './crickreguser.component';

describe('CrickreguserComponent', () => {
  let component: CrickreguserComponent;
  let fixture: ComponentFixture<CrickreguserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickreguserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickreguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
