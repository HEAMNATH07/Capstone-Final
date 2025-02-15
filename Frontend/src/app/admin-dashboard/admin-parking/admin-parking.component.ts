import { Component, OnInit } from '@angular/core';
import { ParkingSlotService } from '../../parking.service';
import { ParkingSlot ,VehicleType } from '../../parking-slot.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-admin-parking',
  templateUrl: './admin-parking.component.html',
  imports:[CommonModule,FormsModule,HttpClientModule],
  providers: [ParkingSlotService], // Enable change detection for performance optimization
  styleUrls: ['./admin-parking.component.css']
})
export class AdminParkingComponent implements OnInit {
  parkingSlots: ParkingSlot[] = [];
  vehicleType: VehicleType[] = [];
  selectedSlot: ParkingSlot | null = null;
  newSlot: ParkingSlot = { floor: '', section: '', slotNumber: '', vehicleType:'', isBooked: false, employeeId: '', bookTime: '', duration: 0 };

  constructor(private parkingSlotService: ParkingSlotService) {}

  ngOnInit(): void {
    this.fetchParkingSlots();
  }

  fetchParkingSlots() {
    this.parkingSlotService.getAllParkingSlots().subscribe(slots => {
      this.parkingSlots = slots;
    });
  }

  // Delete a parking slot
  deleteBooking(id: string| undefined){
    if (id) {
      this.parkingSlotService.deleteParkingSlot(id).subscribe(() => {
        this.fetchParkingSlots();  // Refresh the list after deletion
      });
    } else {
      console.warn('Parking Slot ID is undefined!');
    }
  }

  // Select a parking slot to edit
  editBooking(slot: ParkingSlot) {
    this.selectedSlot = { ...slot };  // Copy the selected slot for editing
  }

  // Save updated parking slot
  updateBooking() {
    if (this.selectedSlot) {
      this.parkingSlotService.addParkingSlot(this.selectedSlot).subscribe(() => {
        this.fetchParkingSlots();  // Refresh the list after update
        this.selectedSlot = null;  // Reset the selected slot
      });
    }
  }

  // Add a new parking slot
  addNewSlot() {
    this.parkingSlotService.addParkingSlot(this.newSlot).subscribe(() => {
      this.fetchParkingSlots();  // Refresh the list after adding
      this.newSlot = { floor: '', section: '', slotNumber: '', vehicleType: '', isBooked: false, employeeId: '', bookTime: '', duration: 0 };  // Reset the form
    });
  }
}
