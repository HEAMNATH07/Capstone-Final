import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Event } from '../create-event-request/event.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-participate-event',
  templateUrl: './participate-event.component.html',
   imports: [CommonModule,FormsModule],
  styleUrls: ['./participate-event.component.css']
})
export class ParticipateEventComponent implements OnInit {
  events: Event[] = [];
  selectedEvent: Event = { id: '', name: '', description: '', status: '', employeeId: '', venueId: '', seatsBooked: 0, totalSeats: 0, vendorIds: [], resourcePersonIds: [], eventDate: '', bookedEmployees: [] };

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe(
      (response) => {
        this.events = response.filter(event => event.status === 'Approved');
      },
      (error) => {
        console.error('Error fetching events', error);
      }
    );
  }

  bookSeats() {
    if (this.selectedEvent.id && this.selectedEvent.seatsBooked < this.selectedEvent.totalSeats) {
      this.eventService.bookSeats(this.selectedEvent.id, 1, 'user-email', 'user-id').subscribe(
        (response) => {
          alert('Seat booked successfully!');
          this.ngOnInit(); // Refresh event list after booking
        },
        (error) => {
          console.error('Error booking seat', error);
        }
      );
    }
  }
}
