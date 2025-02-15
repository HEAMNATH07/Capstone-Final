import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Workspace {
  id: string;
  floor: string;
  room: string;
  seatNumber: string;
  isBooked: boolean;
  projectId: string;
  employeeId: string;
  bookTime: string;
  duration: number;
}
@Component({
  selector: 'app-admin-workspace',
  imports: [CommonModule],
  templateUrl: './admin-workspace.component.html',
  styleUrl: './admin-workspace.component.css'
})
export class AdminWorkspaceComponent {
  workspaces: Workspace[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadWorkspaces();
  }

  loadWorkspaces() {
    // Fetch workspaces from backend (Replace with API call)
    this.workspaces = [
      { id: '1', floor: '1', room: '101', seatNumber: 'A1', isBooked: true, projectId: 'P123', employeeId: 'E001', bookTime: '2024-02-10T10:00', duration: 2 },
      { id: '2', floor: '2', room: '202', seatNumber: 'B2', isBooked: false, projectId: '', employeeId: '', bookTime: '', duration: 0 }
    ];
  }

  addWorkspace() {
    // Implement logic to add workspace (API call)
  }

  updateWorkspace(workspace: Workspace) {
    // Implement logic to update workspace (API call)
  }

  deleteWorkspace(id: string) {
    this.workspaces = this.workspaces.filter(ws => ws.id !== id);
  }
}
