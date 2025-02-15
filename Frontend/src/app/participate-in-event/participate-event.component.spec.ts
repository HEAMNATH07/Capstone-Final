import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcipateInEventComponent } from './participate-event.component';

describe('ParcipateInEventComponent', () => {
  let component: ParcipateInEventComponent;
  let fixture: ComponentFixture<ParcipateInEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcipateInEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParcipateInEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
