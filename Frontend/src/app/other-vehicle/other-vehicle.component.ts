import { Component, OnInit } from '@angular/core';
import { ParkingSlotService } from '../parking.service';
import { ParkingSlot, VehicleType } from '../parking-slot.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-other-parking',
  templateUrl: './other-parking.component.html',
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [ParkingSlotService],
  standalone: true,
  styleUrls: ['./other-parking.component.css']
})
export class OtherVehicleComponent implements OnInit {
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

  fetchFloors(): void {
    this.parkingSlotService.getAllParkingSlots().subscribe(slots => {
      this.floors = [...new Set(slots.map(slot => slot.floor))];
    });
  }

  onFloorSelect(): void {
    if (this.selectedFloor) {
      this.parkingSlotService.getParkingSlotsByFloor(this.selectedFloor).subscribe(slots => {
        this.sections = [...new Set(slots.map(slot => slot.section))];
      });
    }
  }

  onSectionSelect(): void {
    if (this.selectedFloor && this.selectedSection) {
      this.parkingSlotService.getParkingSlotsByFloorAndSection(this.selectedFloor, this.selectedSection).subscribe(slots => {
        this.slots = slots.filter(slot => slot.vehicleType === VehicleType.OTHER);
      });
    }
  }

  onSlotSelect(slot: ParkingSlot): void {
    if (!slot.isBooked) {
      this.selectedSlot = slot;
    }
  }

  bookSlot(): void {
    if (this.selectedSlot && this.employeeId && this.duration > 0) {
      this.parkingSlotService.bookParkingSlot(this.selectedSlot, this.employeeId, this.duration).subscribe(response => {
        alert(`Booking successful! `);
        this.selectedSlot = undefined;
        this.onSectionSelect();
      }, error => {
        alert('Booking failed! Please try again.');
      });
    } else {
      alert('Please enter valid details.');
    }
  }

  cancelBooking(): void {
    this.selectedSlot = undefined;
  }
}
