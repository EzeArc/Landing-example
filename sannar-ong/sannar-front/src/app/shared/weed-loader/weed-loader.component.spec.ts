import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeedLoaderComponent } from './weed-loader.component';

describe('WeedLoaderComponent', () => {
  let component: WeedLoaderComponent;
  let fixture: ComponentFixture<WeedLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeedLoaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeedLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
