import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeParkingComponent } from './bike-parking.component';

describe('BikeParkingComponent', () => {
  let component: BikeParkingComponent;
  let fixture: ComponentFixture<BikeParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BikeParkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
