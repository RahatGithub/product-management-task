import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductViewComponent } from './single-product-view.component';

describe('SingleProductViewComponent', () => {
  let component: SingleProductViewComponent;
  let fixture: ComponentFixture<SingleProductViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleProductViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
