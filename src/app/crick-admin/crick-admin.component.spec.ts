import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickAdminComponent } from './crick-admin.component';

describe('CrickAdminComponent', () => {
  let component: CrickAdminComponent;
  let fixture: ComponentFixture<CrickAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
