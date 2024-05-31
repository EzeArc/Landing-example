import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowKitComponent } from './grow-kit.component';

describe('GrowKitComponent', () => {
  let component: GrowKitComponent;
  let fixture: ComponentFixture<GrowKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowKitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrowKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
