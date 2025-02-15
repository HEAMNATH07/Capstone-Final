import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Payment {
  amount: number;
  date: string;
}

interface Vendor {
  id: string;
  name: string;
  contactEmail: string;
  type: string;
  payments: Payment[];
  totalAmount: number;
  pendingAmount: number;
  eventId: string;
}

@Component({
  selector: 'app-admin-vendor',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-vendor.component.html',
  styleUrl: './admin-vendor.component.css'
})
export class AdminVendorComponent {
  vendors: Vendor[] = [];
  vendorTypes = ['Catering', 'Decoration', 'Logistics', 'Security'];
  
  modalVisible: boolean = false;
  isEditMode: boolean = false;
  vendorForm: Vendor = this.getEmptyVendor();

  openVendorModal() {
    this.vendorForm = this.getEmptyVendor();
    this.isEditMode = false;
    this.modalVisible = true;
  }

  editVendor(vendor: Vendor) {
    this.vendorForm = { ...vendor };
    this.isEditMode = true;
    this.modalVisible = true;
  }

  deleteVendor(id: string) {
    this.vendors = this.vendors.filter(vendor => vendor.id !== id);
  }

  saveVendor() {
    if (this.isEditMode) {
      this.vendors = this.vendors.map(v => (v.id === this.vendorForm.id ? { ...this.vendorForm } : v));
    } else {
      this.vendorForm.id = Math.random().toString(36).substr(2, 9);
      this.vendors.push({ ...this.vendorForm });
    }
    this.closeModal();
  }

  closeModal() {
    this.modalVisible = false;
  }

  private getEmptyVendor(): Vendor {
    return {
      id: '',
      name: '',
      contactEmail: '',
      type: '',
      payments: [],
      totalAmount: 0,
      pendingAmount: 0,
      eventId: ''
    };
  }
}
