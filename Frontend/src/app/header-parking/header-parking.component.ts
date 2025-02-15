import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-parking',
  imports: [CommonModule],
  templateUrl: './header-parking.component.html',
  styleUrl: './header-parking.component.css'
})
export class HeaderParkingComponent {
  dropdownVisible = false;

  constructor(private router: Router) {}

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  viewAccount() {
    // Navigate to the Account Details page
    this.router.navigate(['/account']);
    this.dropdownVisible = false;
  }

  logout() {
    // Handle logout logic (e.g., clearing session data)
    console.log('Logging out...');
    this.router.navigate(['/login']);
    this.dropdownVisible = false;
  }
}
