import { Injectable } from '@angular/core';
import { DeviceCategory } from './category-service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Device{
  deviceId?:number;
  name?:string;
  type?:string;
  room?:string;
  status?:string;
  deviceCategory?: DeviceCategory;
}

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  // private baseUrl = "http://172.24.60.170:8140/device"
  private baseUrl = "http://ks20l1015:8140/device"
  constructor(private http: HttpClient) {}

  createDevice(device : Device) : Observable<Device>{
    return this.http.post<Device>(`${this.baseUrl}/create`, device);
  }

  getAllDevices() : Observable<Device[]>{
    return this.http.get<Device[]>(`${this.baseUrl}/getall`);
  }

  getDeviceById(id : number) : Observable<Device>{
    return this.http.get<Device>(`${this.baseUrl}/${id}`);
  }

  getDeviceByCategory(catname : string) : Observable<Device[]>{
    return this.http.get<Device[]>(`${this.baseUrl}/category/filter/${catname}`);
  }
}
