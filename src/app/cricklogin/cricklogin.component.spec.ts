import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickloginComponent } from './cricklogin.component';

describe('CrickloginComponent', () => {
  let component: CrickloginComponent;
  let fixture: ComponentFixture<CrickloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
