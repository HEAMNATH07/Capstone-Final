import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCafeteriaComponent } from './admin-cafeteria.component';

describe('AdminCafeteriaComponent', () => {
  let component: AdminCafeteriaComponent;
  let fixture: ComponentFixture<AdminCafeteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCafeteriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCafeteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
