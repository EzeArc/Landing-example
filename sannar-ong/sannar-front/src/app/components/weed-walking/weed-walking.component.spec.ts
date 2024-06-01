import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedWalkingComponent } from './weed-walking.component';

describe('WeedWalkingComponent', () => {
  let component: WeedWalkingComponent;
  let fixture: ComponentFixture<WeedWalkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeedWalkingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeedWalkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
