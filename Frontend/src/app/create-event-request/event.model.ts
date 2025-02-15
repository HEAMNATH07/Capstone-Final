export interface Event {
    id: string;
    name: string;
    description: string;
    status: string; // Pending / Approved
    employeeId: string;
    venueId: string;
    seatsBooked: number;
    totalSeats: number;
    vendorIds: string[];
    resourcePersonIds: string[];
    eventDate: string;
    bookedEmployees: string[];
  }
  