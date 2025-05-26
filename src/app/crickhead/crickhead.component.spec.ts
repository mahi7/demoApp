import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickheadComponent } from './crickhead.component';

describe('CrickheadComponent', () => {
  let component: CrickheadComponent;
  let fixture: ComponentFixture<CrickheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
