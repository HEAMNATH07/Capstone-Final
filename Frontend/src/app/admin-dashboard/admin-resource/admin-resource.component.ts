import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../../resource.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-resource',
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-resource.component.html',
  styleUrl: './admin-resource.component.css'
})
export class AdminResourceComponent implements OnInit{
  resourceList: any[] = [];
  resource: any = { id: '', name: '', contactInfo: '', isAvailable: true, department: '' };
  isEditing: boolean = false;

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.resourceService.getAllResources().subscribe((resources) => {
      this.resourceList = resources;
    });
  }

  saveResource(): void {
    if (this.isEditing) {
      this.resourceService.updateResource(this.resource.id, this.resource).subscribe(() => {
        alert('Resource updated successfully!');
        this.resetForm();
        this.loadResources();
      });
    } else {
      this.resourceService.addResource(this.resource).subscribe(() => {
        alert('Resource added successfully!');
        this.resetForm();
        this.loadResources();
      });
    }
  }

  editResource(resource: any): void {
    this.resource = { ...resource };
    this.isEditing = true;
  }

  deleteResource(id: string): void {
    if (confirm('Are you sure you want to delete this resource?')) {
      this.resourceService.deleteResource(id).subscribe(() => {
        alert('Resource deleted successfully!');
        this.loadResources();
      });
    }
  }

  resetForm(): void {
    this.resource = { id: '', name: '', contactInfo: '', isAvailable: true, department: '' };
    this.isEditing = false;
  }
}
