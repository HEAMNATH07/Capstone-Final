import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register-admin',
  imports: [CommonModule, FormsModule,ReactiveFormsModule,HttpClientModule],
  standalone: true,
  providers: [AuthService],
  templateUrl: './register-admin.component.html',
  styleUrl: './register-admin.component.css'
})
export class RegisterAdminComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['admin'] // Default value set
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.registerAdmin(this.registerForm.value).subscribe(
        () => this.router.navigate(['/login']),
        (error) => console.error('Registration failed', error)
      );
    }
  }
}
