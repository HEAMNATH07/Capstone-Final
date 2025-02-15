import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AdminCafeteriaComponent } from './admin-cafeteria/admin-cafeteria.component';
import { AdminEventComponent } from './admin-event/admin-event.component';
import { AdminParkingComponent } from './admin-parking/admin-parking.component';
import { AdminResourceComponent } from './admin-resource/admin-resource.component';
import { AdminVendorComponent } from './admin-vendor/admin-vendor.component';
import { AdminWorkspaceComponent } from './admin-workspace/admin-workspace.component';

@Component({
  selector: 'app-admin-dashboard',
  imports: [
    CommonModule,
    AdminCafeteriaComponent,
    AdminEventComponent,
    AdminParkingComponent,
    AdminResourceComponent,
    AdminVendorComponent,
    AdminWorkspaceComponent,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  selectedCard: any = null;
  cardsVisible: boolean = true;

  cards = [
    { name: 'Parking' },
    { name: 'Workspace' },
    { name: 'Event' },
    { name: 'Vendor' },
    { name: 'Resource' },
    { name: 'Cafeteria' },
  ];

  expandCard(card: any) {
    this.selectedCard = card;
    this.cardsVisible = false;
  }

  closeCard() {
    this.selectedCard = null;
    this.cardsVisible = true;
  }
}
