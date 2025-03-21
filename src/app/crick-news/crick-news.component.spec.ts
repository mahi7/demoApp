import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickNewsComponent } from './crick-news.component';

describe('CrickNewsComponent', () => {
  let component: CrickNewsComponent;
  let fixture: ComponentFixture<CrickNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
