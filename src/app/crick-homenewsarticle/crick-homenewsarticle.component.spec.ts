import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrickHomenewsarticleComponent } from './crick-homenewsarticle.component';

describe('CrickHomenewsarticleComponent', () => {
  let component: CrickHomenewsarticleComponent;
  let fixture: ComponentFixture<CrickHomenewsarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrickHomenewsarticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrickHomenewsarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
