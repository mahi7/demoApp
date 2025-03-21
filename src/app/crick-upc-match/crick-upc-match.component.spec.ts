import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickUpcMatchComponent } from './crick-upc-match.component';

describe('CrickUpcMatchComponent', () => {
  let component: CrickUpcMatchComponent;
  let fixture: ComponentFixture<CrickUpcMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickUpcMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickUpcMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
