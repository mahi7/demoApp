import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickHighComponent } from './crick-high.component';

describe('CrickHighComponent', () => {
  let component: CrickHighComponent;
  let fixture: ComponentFixture<CrickHighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickHighComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickHighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
