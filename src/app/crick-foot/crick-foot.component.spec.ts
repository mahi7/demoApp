import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickFootComponent } from './crick-foot.component';

describe('CrickFootComponent', () => {
  let component: CrickFootComponent;
  let fixture: ComponentFixture<CrickFootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickFootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
