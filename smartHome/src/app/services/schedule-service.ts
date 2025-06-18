import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from './device-service';

export interface Schedule{
  scheduleId?:number;
  deviceId?:number;
  action?:string;
  scheduleTime?:string;
}

export interface ScheduleResponseDTO{
  scheduleId?:number;
  device?: Device;
  action?:string;
  scheduleTime?:string;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private baseUrl = "http://ks20l1015:8141/schedule";
  //private baseUrl = "http://172.24.60.170:8141/schedule";
  constructor(private http: HttpClient) { }

  addSchedule(schedule : Schedule) : Observable<Schedule>{
    return this.http.post<Schedule>(`${this.baseUrl}/create`, schedule);
  }

  getScheduleById(id : number) : Observable<ScheduleResponseDTO>{
    return this.http.get<ScheduleResponseDTO>(`${this.baseUrl}/${id}`);
  }

  getSchedulesByDeviceId(deviceId : number) : Observable<Schedule[]>{
    return this.http.get<Schedule[]>(`${this.baseUrl}/device/${deviceId}`);
  }

}
