import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricesProductsComponent } from './prices-products.component';

describe('PricesProductsComponent', () => {
  let component: PricesProductsComponent;
  let fixture: ComponentFixture<PricesProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricesProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricesProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
