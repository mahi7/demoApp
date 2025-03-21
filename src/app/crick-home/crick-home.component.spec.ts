import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickHomeComponent } from './crick-home.component';

describe('CrickHomeComponent', () => {
  let component: CrickHomeComponent;
  let fixture: ComponentFixture<CrickHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
