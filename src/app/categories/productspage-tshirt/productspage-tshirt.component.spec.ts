import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspageTshirtComponent } from './productspage-tshirt.component';

describe('ProductspageTshirtComponent', () => {
  let component: ProductspageTshirtComponent;
  let fixture: ComponentFixture<ProductspageTshirtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductspageTshirtComponent]
    });
    fixture = TestBed.createComponent(ProductspageTshirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
