import { Component } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { Event } from './event.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-create-event-request',
  standalone: true,
  imports: [HttpClientModule,CommonModule,FormsModule],  // Import HttpClientModule
  providers: [EventService],
  templateUrl: './create-event-request.component.html',
  styleUrls: ['./create-event-request.component.css']
})
export class CreateEventRequestComponent {
  
  event: Event = {
    id: '',
    name: '',
    description: '',
    status: 'Pending',
    employeeId: '',
    venueId: '',
    seatsBooked: 0,
    totalSeats: 0,
    vendorIds: [],
    resourcePersonIds: [],
    eventDate: '',
    bookedEmployees: []
  };

  constructor(private eventService: EventService) {}

  createEvent() {
    this.eventService.createEvent(this.event).subscribe(
      (response) => {
        alert('Event created successfully and awaiting admin approval.');
      },
      (error) => {
        console.error('Error creating event', error);
      }
    );
  }
}