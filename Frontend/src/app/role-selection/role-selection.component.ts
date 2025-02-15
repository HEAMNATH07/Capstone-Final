import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selection',
  imports: [],
  templateUrl: './role-selection.component.html',
  styleUrl: './role-selection.component.css'
})
export class RoleSelectionComponent {
  constructor(private router: Router) {}

  selectRole(role: string) {
    if (role === 'employee') {
      this.router.navigate(['/register-employee']);
    } else if (role === 'resource_person') {
      this.router.navigate(['/register-resource-person']);
    } else if (role === 'admin') {
      this.router.navigate(['/register-admin']);
    }
   
  }
  goToLogin(){
    this.router.navigate(['/login']);
  }
}
