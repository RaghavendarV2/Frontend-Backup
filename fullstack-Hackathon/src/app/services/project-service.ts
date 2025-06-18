import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Project{
  projectId?: number;
  projectTitle?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private baseUrl = "http://localhost:8120/api/projects";
  constructor(private http: HttpClient) { }

  createProject(project : Project) : Observable<Project>{
    return this.http.post<Project>(`${this.baseUrl}/create`, project);
  }

  getProjectById(id : number) : Observable<Project>{
    return this.http.get<Project>(`${this.baseUrl}/getbyid/${id}`);
  }

  getAllProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(`${this.baseUrl}/getall`)
  }

  assignUsersToProject(id : number, users: number[]) : Observable<Project>{
    return this.http.post<Project>(`${this.baseUrl}/${id}/assignusers`, users);
  }
}
