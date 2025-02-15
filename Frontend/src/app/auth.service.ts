import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private employeeBaseUrl = 'http://localhost:9090/users';
  private adminBaseUrl = 'http://localhost:8081/admin';

  constructor(private http: HttpClient) {}

  // Employee and Resource Person Registration (Port: 9090)
  registerEmployee(employeeData: any): Observable<any> {
    return this.http.post(`${this.employeeBaseUrl}/registeremployee`, employeeData);
  }

  registerResourcePerson(resourcePersonData: any): Observable<any> {
    return this.http.post(`${this.employeeBaseUrl}/register-resource-person`, resourcePersonData);
  }

  // Admin Registration (Port: 8081)
  registerAdmin(adminData: any): Observable<any> {
    return this.http.post(`${this.adminBaseUrl}/register`, adminData);
  }

  // Login (Determines API based on Role)
  login(credentials: any): Observable<any> {
    if (credentials.role === 'admin') {
      return this.http.post(`${this.adminBaseUrl}/login`, credentials);
    } else {
      return this.http.post(`${this.employeeBaseUrl}/login`, credentials);
    }
  }
}
