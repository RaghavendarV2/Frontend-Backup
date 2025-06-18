import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HistoryService, ScheduleHistory } from '../services/history-service';
import { Schedule } from '../services/schedule-service';

@Component({
  selector: 'app-schedule-history-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './schedule-history-component.html',
  styleUrl: './schedule-history-component.css'
})
export class ScheduleHistoryComponent {
  newHistory : any = {
    executionTime : '',
    status : '',
    scheduleId : ''
  }

  successMsg : string = '';

  constructor(private historyService : HistoryService){}

  ngOnInit(): void {
  }

  resetForm(){
    this.newHistory = {
      executionTime : '',
      status : '',
      scheduleId : '' 
    }
  }

  addHistory(){
    const scheduleHistory : ScheduleHistory = {
      executionTime : this.newHistory.executionTime,
      status : this.newHistory.status,
      schedule : {scheduleId : this.newHistory.scheduleId} as Schedule
    }
    this.historyService.addHistory(scheduleHistory).subscribe(() =>{
      this.successMsg = "Successfully Added Device Schedule!";
      this.resetForm();

    })
    
  }
}
