import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderParkingComponent } from './header-parking.component';

describe('HeaderParkingComponent', () => {
  let component: HeaderParkingComponent;
  let fixture: ComponentFixture<HeaderParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderParkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
