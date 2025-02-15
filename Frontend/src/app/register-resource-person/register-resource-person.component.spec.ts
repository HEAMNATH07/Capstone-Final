import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterResourcePersonComponent } from './register-resource-person.component';

describe('RegisterResourcePersonComponent', () => {
  let component: RegisterResourcePersonComponent;
  let fixture: ComponentFixture<RegisterResourcePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterResourcePersonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterResourcePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
