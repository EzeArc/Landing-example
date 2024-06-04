import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqGroupComponent } from './faq-group.component';

describe('FaqGroupComponent', () => {
  let component: FaqGroupComponent;
  let fixture: ComponentFixture<FaqGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaqGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FaqGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
