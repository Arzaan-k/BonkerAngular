import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteSliderComponent } from './infinite-slider.component';

describe('InfiniteSliderComponent', () => {
  let component: InfiniteSliderComponent;
  let fixture: ComponentFixture<InfiniteSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfiniteSliderComponent]
    });
    fixture = TestBed.createComponent(InfiniteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
