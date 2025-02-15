import { Component, OnInit } from '@angular/core';
import { ParkingSlotService } from '../parking.service';
import { ParkingSlot,VehicleType } from '../parking-slot.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-bike-parking',
  templateUrl: './bike-parking.component.html',
  imports:[CommonModule,FormsModule,HttpClientModule],
  providers:[ParkingSlotService],
  standalone: true,
  styleUrls: ['./bike-parking.component.css']
})
export class BikeParkingComponent implements OnInit {
  floors: string[] = [];
  sections: string[] = [];
  slots: ParkingSlot[] = [];
  
  selectedFloor?: string;
  selectedSection?: string;
  selectedSlot?: ParkingSlot;
  
  employeeId: string = '';
  duration: number = 1;

  constructor(private parkingSlotService: ParkingSlotService) {}

  ngOnInit(): void {
    this.fetchFloors();
  }

  // Fetch available floors
  fetchFloors(): void {
    this.parkingSlotService.getAllParkingSlots().subscribe(slots => {
      this.floors = [...new Set(slots.map(slot => slot.floor))]; // Extract unique floors
    });
  }

  // Fetch sections for selected floor
  onFloorSelect(): void {
    if (this.selectedFloor) {
      this.parkingSlotService.getParkingSlotsByFloor(this.selectedFloor).subscribe(slots => {
        this.sections = [...new Set(slots.map(slot => slot.section))]; // Extract unique sections
      });
    }
  }

  // Fetch available slots for selected floor and section
  onSectionSelect(): void {
    if (this.selectedFloor && this.selectedSection) {
      this.parkingSlotService.getParkingSlotsByFloorAndSection(this.selectedFloor, this.selectedSection).subscribe(slots => {
        this.slots = slots.filter(slot => slot.vehicleType === VehicleType.BIKE); // Filter for bikes
      });
    }
  }

  // Select a slot
  onSlotSelect(slot: ParkingSlot): void {
    if (!slot.isBooked) {
      this.selectedSlot = slot;
    }
  }

  // Book a parking slot
  bookSlot(): void {
    if (this.selectedSlot && this.employeeId && this.duration > 0) {
      this.parkingSlotService.bookParkingSlot(this.selectedSlot, this.employeeId, this.duration).subscribe(response => {
        alert(`Booking successful! ${response}`);
        this.selectedSlot = undefined;
        this.onSectionSelect(); // Refresh slots
      }, error => {
        alert('Booking failed! Please try again.');
      });
    } else {
      alert('Please enter valid details.');
    }
  }

  // Cancel booking process
  cancelBooking(): void {
    this.selectedSlot = undefined;
  }
}
