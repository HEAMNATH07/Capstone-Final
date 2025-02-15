import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderParkingComponent } from "../header-parking/header-parking.component";

@Component({
  selector: 'app-select-vehicle',
  templateUrl: './select-vehicle.component.html',
  styleUrls: ['./select-vehicle.component.css'],
  imports: [HeaderParkingComponent],
})
export class SelectVehicleComponent {
  constructor(private router: Router) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
