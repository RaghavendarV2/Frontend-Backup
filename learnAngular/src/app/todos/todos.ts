import { Component, inject } from '@angular/core';
import { TodoService } from '../services/todo';
import { Todo } from '../models/todo.type';
import { catchError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.html',
  styleUrl: './todos.css'
})
export class Todos {
  todoService = inject(TodoService);

  todoItems: Todo[] =[];

  ngOnInit(): void {
    this.todoService.gettodosfromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((todos) => {
      this.todoItems = todos;
    })
  }
  
}
