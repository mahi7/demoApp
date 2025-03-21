import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickHighDetailsComponent } from './crick-high-details.component';

describe('CrickHighDetailsComponent', () => {
  let component: CrickHighDetailsComponent;
  let fixture: ComponentFixture<CrickHighDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickHighDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickHighDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
