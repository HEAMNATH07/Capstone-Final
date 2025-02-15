import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingSlot, VehicleType } from './parking-slot.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingSlotService {
 
  private apiUrl = 'http://localhost:9093/api/parking-slots';

  constructor(private http: HttpClient) {}

  // Get all parking slots
  getAllParkingSlots(): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(`${this.apiUrl}/all`);
  }

  // Get parking slots by floor
  getParkingSlotsByFloor(floor: string): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(`${this.apiUrl}/floor/${floor}`);
  }

  // Get parking slots by floor and section
  getParkingSlotsByFloorAndSection(floor: string, section: string): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(`${this.apiUrl}/by-floor-and-section?floor=${floor}&section=${section}`);
  }

  // Get parking slots by vehicle type
  getParkingSlotsByVehicleType(vehicleType: VehicleType): Observable<ParkingSlot[]> {
    return this.http.get<ParkingSlot[]>(`${this.apiUrl}/vehicle-type/${vehicleType}`);
  }

  // Book a parking slot
  bookParkingSlot(slot: ParkingSlot, employeeId: string, duration: number): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/book`, null, {
      params: {
        floor: slot.floor,
        section: slot.section,
        slotNumber: slot.slotNumber,
        employeeId,
        vehicleType: slot.vehicleType,
        duration: duration
      }
    });
  }

  // Unbook a parking slot
  unbookParkingSlot(parkingSlotId: string): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/unbook`, null, {
      params: { parkingSlotId }
    });
  }

  // Admin: Add a new parking slot
  addParkingSlot(slot: ParkingSlot): Observable<ParkingSlot> {
    return this.http.post<ParkingSlot>(`${this.apiUrl}/create`, null, {
      params: {
        floor: slot.floor,
        section: slot.section,
        slotNumber: slot.slotNumber,
        vehicleType: slot.vehicleType
      }
    });
  }

  // Admin: Delete a parking slot
  deleteParkingSlot(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
