import { Injectable } from '@angular/core';
import { User } from './user-service';
import { Project } from './project-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  taskId?: number;
  taskTitle?: string;
  description?: string;
  status?: string;
  assignedUser?: User;
  project?: Project
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = "http://localhost:8120/api/tasks";
  constructor(private http: HttpClient) { }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.baseUrl}/create`, task);
  }

  getAllTasksOfAProject(projectId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/project/${projectId}`);
  }

  updateTask(taskId: number, status?: string, assignedUserId?: number): Observable<Task> {
    let params = new HttpParams();
    if (status !== undefined) {
      params = params.set('status', status);
    }
    if (assignedUserId !== undefined) {
      params = params.set('assignedUserId', assignedUserId.toString());
    }

    return this.http.put<Task>(`${this.baseUrl}/update/${taskId}`, null, { params });
  }
}
