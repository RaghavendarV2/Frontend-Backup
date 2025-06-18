import { Injectable } from '@angular/core';
import { Schedule } from './schedule-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ScheduleHistory{
  scheduleHistoryId?: number;
  executionTime?: string;
  status?:string;
  schedule?:Schedule;
}

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private baseUrl = "http://ks20l1015:8141/schedule/history";
  //private baseUrl = "http://172.24.60.170:8141/schedule";
  constructor(private http:HttpClient) {}

  addHistory(history : ScheduleHistory) : Observable<ScheduleHistory>{
    return this.http.post<ScheduleHistory>(`${this.baseUrl}/create`, history);
  }
}
