import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './create-event-request/event.model'; // Define your Event interface/model

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private apiUrl = 'http://localhost:9097/api/events';

  constructor(private http: HttpClient) {}

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}/request`, event);
  }

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  approveEvent(eventId: string): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${eventId}/approve`, {});
  }

  bookSeats(eventId: string, seats: number, userEmail: string, employeeId: string): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}/${eventId}/bookSeats`, { seats, userEmail, employeeId });
  }

  deleteEvent(eventId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${eventId}`);
  }

  updateEvent(eventId: string, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${eventId}`, event);
  }

  checkVenueAvailability(venueId: string, seatsRequired: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/venue/${venueId}/availability`, {
      params: { seatsRequired: seatsRequired.toString() },
    });
  }
}
