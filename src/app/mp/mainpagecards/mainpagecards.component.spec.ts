import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagecardsComponent } from './mainpagecards.component';

describe('MainpagecardsComponent', () => {
  let component: MainpagecardsComponent;
  let fixture: ComponentFixture<MainpagecardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainpagecardsComponent]
    });
    fixture = TestBed.createComponent(MainpagecardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
