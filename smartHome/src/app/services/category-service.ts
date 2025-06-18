import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DeviceCategory{
  categoryId?:number,
  categoryName?: string
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = "http://ks20l1015:8140/device/category"
  constructor(private http:HttpClient) {}

  addDeviceCategory(category:DeviceCategory) : Observable<DeviceCategory>{
    return this.http.post<DeviceCategory>(`${this.baseUrl}/create`, category);
  }

  getCategoryById(id:number) : Observable<DeviceCategory>{
    return this.http.get<DeviceCategory>(`${this.baseUrl}/${id}`);
  }
}
