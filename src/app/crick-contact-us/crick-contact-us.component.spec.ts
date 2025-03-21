import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickContactUSComponent } from './crick-contact-us.component';

describe('CrickContactUSComponent', () => {
  let component: CrickContactUSComponent;
  let fixture: ComponentFixture<CrickContactUSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickContactUSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickContactUSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
