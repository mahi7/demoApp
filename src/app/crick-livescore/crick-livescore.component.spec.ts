import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickLivescoreComponent } from './crick-livescore.component';

describe('CrickLivescoreComponent', () => {
  let component: CrickLivescoreComponent;
  let fixture: ComponentFixture<CrickLivescoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickLivescoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickLivescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
