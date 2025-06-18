import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Project, ProjectService } from '../services/project-service';

@Component({
  selector: 'app-project-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './project-component.html',
  styleUrl: './project-component.css'
})

export class ProjectComponent {

  newProject: any = {
    id: 0,
    projectTitle: '',
    description: '',
    startDate: null,
    endDate: null
  }

  searchId: number | null = null;
  searchAttempted: boolean | null = null;

  foundProject: Project | null = null;
  projects: Project[] = [];

  userIdsInput: { [projectId: number]: string } = {};
  message: string | null = null;

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadAllProjects();
  }

  loadAllProjects() {
    this.projectService.getAllProjects().subscribe({
      next: data => {
        this.projects = data;
  
        this.projects.forEach(project => {
          if (project.projectId !== undefined) {
            this.userIdsInput[project.projectId] = '';
          }
        });
      },
      error: err => this.message = 'Failed to load projects'
    });
  }
  

  addProject(){
    const project : Project = {
      projectTitle : this.newProject.projectTitle,
      description : this.newProject.description,
      startDate : this.newProject.startDate,
      endDate : this.newProject.endDate
    } 

    return this.projectService.createProject(project).subscribe(() => {
      this.loadAllProjects();
      this.resetForm();
    })
  }

  resetForm(){
    this.newProject = {
      id: 0,
      projectTitle: '',
      description: '',
      startDate: null,
      endDate: null
    }
  }

  searchProjectById() : void{
    if(this.searchId == null){
      this.searchAttempted = false;
      return;
    }
    else{
      this.searchAttempted = true;
      this.projectService.getProjectById(this.searchId).subscribe({
        next : project => {
          this.foundProject = project;
        }
      })
    }
  }

  

  assignUsers(projectId: number) {
    this.message = null;
    const input = this.userIdsInput[projectId];
    if (!input) {
      this.message = 'Please enter user IDs separated by commas.';
      return;
    }

    // Parse input string into array of numbers
    const userIds = input
      .split(',')
      .map(id => id.trim())
      .filter(id => id !== '')
      .map(id => Number(id))
      .filter(id => !isNaN(id));

    if (userIds.length === 0) {
      this.message = 'Please enter valid user IDs.';
      return;
    }

    this.projectService.assignUsersToProject(projectId, userIds).subscribe({
      next: updatedProject => {
        this.message = `Users assigned to project "${updatedProject.projectTitle}" successfully.`;
        // Update project in local list
        const index = this.projects.findIndex(p => p.projectId === projectId);
        if (index !== -1) {
          this.projects[index] = updatedProject;
        }
        // Clear input
        this.userIdsInput[projectId] = '';
      },
      error: err => {
        this.message = 'Failed to assign users to project.';
        console.error(err);
      }
    });
  }
}
