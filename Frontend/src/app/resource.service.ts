import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:8080/resources';

  constructor(private http: HttpClient) {}

  getAllResources(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/all`);
  }

  addResource(resource: any): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/add`, resource);
  }

  updateResource(id: string, resource: any): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update/${id}`, resource);
  }

  deleteResource(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
