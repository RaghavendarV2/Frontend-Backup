import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Schedule, ScheduleResponseDTO, ScheduleService } from '../services/schedule-service';
import { Device, DeviceService } from '../services/device-service';

@Component({
  selector: 'app-schedule-sub-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './schedule-sub-component.html',
  styleUrl: './schedule-sub-component.css'
})
export class ScheduleSubComponent {
  newSchedule: any = {
    deviceId: '',
    action: '',
    scheduleTime: ''
  }

  searchId: number | null = null;
  searchAttempted: boolean = false;
  searchDeviceId: number | null = null;
  deviceHit: boolean = false;
  filteredList: Schedule[] = [];
  successMsg : string = '';

  devices: Device[] = [];

  foundSchedule : ScheduleResponseDTO | null = null;

  constructor(private scheduleService: ScheduleService,
    private deviceService: DeviceService) { }

  ngOnInit(): void {
    this.deviceService.getAllDevices().subscribe(data => {
      this.devices = data;
    });
  }

  addSchedule() {
    const schedule: Schedule = {
      deviceId: this.newSchedule.deviceId,
      action: this.newSchedule.action,
      scheduleTime: this.newSchedule.scheduleTime
    };
    this.scheduleService.addSchedule(schedule).subscribe(() => {
      this.successMsg = "Successfully Added Device Schedule!";
      this.resetForm();
    })
  }

  resetForm() {
    this.newSchedule = {
      deviceId: '',
      action: '',
      scheduleTime: ''
    }
  }

  searchSchedule(){
    if(this.searchId == null){
      this.searchAttempted = false;
      this.foundSchedule = null;
    }
    else{
      this.searchAttempted = true;
      this.scheduleService.getScheduleById(this.searchId).subscribe({
        next : scheduleResponse =>{
          this.foundSchedule = scheduleResponse;
        }
      })
    }
  }

  getSchedulesByDevice(){
    if(this.searchDeviceId == null){
      this.filteredList = [];
      this.deviceHit = false;
    }
    else{
      this.deviceHit =  true;
      this.scheduleService.getSchedulesByDeviceId(this.searchDeviceId).subscribe({
        next : schedules => {
          this.filteredList = schedules;
          if (this.filteredList.length === 0) {
            console.log('No devices found for device ID:', this.searchDeviceId);
          }
        },
        error : err => {
          console.error('Error fetching schedules for device', this.searchDeviceId);
          this.filteredList = [];
          this.deviceHit = false;
        }
      })
    }
  }
}
