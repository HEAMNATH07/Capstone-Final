import { Component } from '@angular/core';
import { EventService } from '../../event.service';
import { CommonModule } from '@angular/common';
import { Event } from '../../create-event-request/event.model';

@Component({
  selector: 'app-admin-event',
  imports: [CommonModule],
  templateUrl: './admin-event.component.html',
  styleUrl: './admin-event.component.css'
})
export class AdminEventComponent {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      (response) => {
        this.events = response;
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }

  approveEvent(eventId: string) {
    this.eventService.approveEvent(eventId).subscribe(
      (response) => {
        alert('Event approved successfully');
        this.ngOnInit(); // Refresh list
      },
      (error) => {
        console.error('Error approving event', error);
      }
    );
  }

  deleteEvent(eventId: string) {
    this.eventService.deleteEvent(eventId).subscribe(
      () => {
        alert('Event deleted successfully');
        this.ngOnInit(); // Refresh list
      },
      (error) => {
        console.error('Error deleting event', error);
      }
    );
  }
}