import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMatTableComponent } from './angular-mat-table.component';

describe('AngularMatTableComponent', () => {
  let component: AngularMatTableComponent;
  let fixture: ComponentFixture<AngularMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
