import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SannarLogoComponent } from './sannar-logo.component';

describe('SannarLogoComponent', () => {
  let component: SannarLogoComponent;
  let fixture: ComponentFixture<SannarLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SannarLogoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SannarLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
