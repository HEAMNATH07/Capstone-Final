import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherVehicleComponent } from './other-vehicle.component';

describe('OtherVehicleComponent', () => {
  let component: OtherVehicleComponent;
  let fixture: ComponentFixture<OtherVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherVehicleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
