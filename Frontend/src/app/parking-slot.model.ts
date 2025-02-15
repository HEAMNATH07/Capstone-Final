export enum VehicleType {
    BIKE = 'BIKE',
    CAR = 'CAR',
    OTHER = 'OTHER'
  }
  
  export interface ParkingSlot {
    id?: string;
    floor: string;
    section: string;
    slotNumber: string;
    vehicleType: string;
    isBooked: boolean;
    employeeId: string;
    bookTime: string;
    duration: number;
  }
  
  
  