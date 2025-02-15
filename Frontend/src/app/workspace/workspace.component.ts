import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workspace',
  imports: [CommonModule],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {
  rooms = [
    { floor: 1, room: 6, capacity: 5, occupied: 3 },
    { floor: 2, room: 5, capacity: 5, occupied: 5 }, // Fully booked
    { floor: 2, room: 6, capacity: 4, occupied: 2 },
    { floor: 3, room: 6, capacity: 6, occupied: 6 }, // Fully booked
    { floor: 4, room: 8, capacity: 8, occupied: 5 },
    { floor: 5, room: 7, capacity: 4, occupied: 2 },
    { floor: 8, room: 9, capacity: 7, occupied: 7 }, // Fully booked
    { floor: 8, room: 3, capacity: 5, occupied: 3 }
  ];

  showDialog = false;
  selectedRoom: any = null;

  openDialog(room: any) {
    if (room.capacity === room.occupied) {
      alert("Room is fully booked!");
      return;
    }
    this.selectedRoom = room;
    this.showDialog = true;
  }

  closeDialog() {
    this.showDialog = false;
    this.selectedRoom = null;
  }

  bookRoom(empId: string, date: string, time: string) {
    if (!empId || !date || !time) {
      alert("All fields are required!");
      return;
    }
    alert(`Room booked successfully for ${date} at ${time}`);
    this.closeDialog();
  }
}
