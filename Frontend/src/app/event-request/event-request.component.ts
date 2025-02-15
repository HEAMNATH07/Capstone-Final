import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-request',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './event-request.component.html',
  styleUrls: ['./event-request.component.css']
})
export class EventRequestComponent {
  showImage = false;

  constructor(private router: Router) {}

  createEvent() {
    this.showImage = true;
    console.log('Create Event Request');
    this.router.navigate(['/create-event-request']);

  }

  participateInEvent() {
    console.log('Participate in an Event');
    this.router.navigate(['/parcipate-in-event']);
  }

  goBack() {
    this.router.navigate(['/']); // Redirects to the home page
  }
}