import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task, TaskService } from '../services/task-service';
import { User } from '../services/user-service';
import { Project } from '../services/project-service';

@Component({
  selector: 'app-task-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-component.html',
  styleUrls: ['./task-component.css'] // <-- plural
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  newTask: {
    taskTitle: string;
    description: string;
    status: string;
    assignedUserId: number | null;
    projectId: number | null;
  } = {
    taskTitle: '',
    description: '',
    status: 'TODO',
    assignedUserId: null,
    projectId: null
  };
  projectId: number = 1;
  availableStatuses: string[] = ['TODO', 'IN_PROGRESS', 'COMPLETED', 'BLOCKED'];
  message: string = '';

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loadTasksForProject();
  }

  loadTasksForProject(): void {
    this.taskService.getAllTasksOfAProject(this.projectId).subscribe(
      tasks => {
        this.tasks = tasks;
      },
      error => {
        this.message = 'Failed to load tasks';
      }
    );
  }

  createTask(): void {
    if (!this.newTask.taskTitle || !this.newTask.description || !this.newTask.status || !this.newTask.assignedUserId || !this.newTask.projectId) {
      this.message = 'Please fill all fields';
      return;
    }

    const task: Task = {
      taskTitle: this.newTask.taskTitle,
      description: this.newTask.description,
      status: this.newTask.status,
      assignedUser: { userId: this.newTask.assignedUserId } as User,
      project: { projectId: this.newTask.projectId } as Project
    };

    this.taskService.createTask(task).subscribe(
      () => {
        this.resetForm();
        this.loadTasksForProject();
        this.message = 'Task created successfully.';
      },
      error => {
        this.message = 'Failed to create task';
      }
    );
  }

  resetForm() {
    this.newTask = {
      taskTitle: '',
      description: '',
      status: 'TODO',
      assignedUserId: null,
      projectId: null
    };
  }

  updateTaskStatus(task: Task, newStatus: string): void {
    if (task.taskId) {
      this.taskService.updateTask(task.taskId, newStatus).subscribe(
        updatedTask => {
          const index = this.tasks.findIndex(t => t.taskId === task.taskId);
          if (index !== -1) {
            this.tasks[index] = updatedTask;
          }
          this.message = 'Task status updated successfully.';
        },
        error => {
          this.message = `Error updating task status: ${error.message}`;
        }
      );
    }
  }

  searchProjectId: number | null = null;
  searchTasksByProject(): void {
    if (this.searchProjectId == null) {
      this.message = 'Please enter a project ID.';
      this.tasks = [];
      return;
    }
    this.taskService.getAllTasksOfAProject(this.searchProjectId).subscribe(
      tasks => {
        this.tasks = tasks;
        if (tasks.length === 0) {
          this.message = 'No tasks found for this project.';
        } else {
          this.message = '';
        }
      },
      error => {
        this.message = 'Error fetching tasks for this project.';
        this.tasks = [];
      }
    );
  }
}
