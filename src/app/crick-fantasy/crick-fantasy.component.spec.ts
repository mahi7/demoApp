import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickFantasyComponent } from './crick-fantasy.component';

describe('CrickFantasyComponent', () => {
  let component: CrickFantasyComponent;
  let fixture: ComponentFixture<CrickFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickFantasyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
