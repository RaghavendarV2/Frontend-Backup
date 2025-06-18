import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Device, DeviceService } from '../services/device-service';
import { DeviceCategory } from '../services/category-service';

@Component({
  selector: 'app-sub-device-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './sub-device-component.html',
  styleUrl: './sub-device-component.css'
})
export class SubDeviceComponent {
  newDevice: any = {
    deviceName: '',
    deviceType: '',
    deviceRoom: '',
    status: '',
    deviceCategoryId: ''
  }

  searchId: number | null = null;
  searchAttempted: boolean = false;
  catName : string | null = null;
  catMatched : boolean = false;
  foundDevice: Device | null = null;
  devices: Device[] = [];
  filtered : Device[] = [];

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.loadAllDevices();
  }

  loadAllDevices() {
    this.deviceService.getAllDevices().subscribe(data => {
      this.devices = data;
    })
  }

  searchDevice() {
    if (this.searchId == null) {
      this.searchAttempted = false;
      this.foundDevice = null;
    }
    else {
      this.searchAttempted = true;
      this.deviceService.getDeviceById(this.searchId).subscribe({
        next: device => {
          this.foundDevice = device;
        }
      })
    }
  }

  addDevice() {
    const device: Device = {
      name: this.newDevice.deviceName,
      type: this.newDevice.deviceType,
      room: this.newDevice.deviceRoom,
      status: this.newDevice.status,
      deviceCategory: { categoryId: this.newDevice.deviceCategoryId } as DeviceCategory
    };

    this.deviceService.createDevice(device).subscribe(() => {
      this.loadAllDevices();
      this.resetForm();

    })
  }

  resetForm() {
    this.newDevice = {
      deviceName: '',
      deviceType: '',
      deviceRoom: '',
      status: '',
      deviceCategoryId: ''
    }
  }

  filterByCat() {
    if (!this.catName || this.catName.trim() === '') {
      this.catMatched = false;
      this.filtered = [];
      return;
    }
  
    this.catMatched = true;
    this.deviceService.getDeviceByCategory(this.catName.trim()).subscribe({
      next: data => {
        this.filtered = data;
        if (this.filtered.length === 0) {
          console.log('No devices found for category:', this.catName);
        }
      },
      error: err => {
        console.error('Error fetching devices by category:', err);
        this.filtered = [];
        this.catMatched = false;
      }
    });
  }
  
}
