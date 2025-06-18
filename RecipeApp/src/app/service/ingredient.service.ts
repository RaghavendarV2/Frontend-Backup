import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Ingredient {
  ingredientId?: number;
  ingredientName?: string;
  quantity?: string;
}

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  private baseUrl = 'http://172.24.60.170:8099/ingredient';

  constructor(private http: HttpClient) { }

  // Create
  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${this.baseUrl}/create`, ingredient)
      .pipe(
        catchError(err => {
          console.error('Error creating ingredient', err);
          return throwError(() => new Error('Error creating ingredient'));
        })
      );
  }

  // Read All
  getAllIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${this.baseUrl}/getall`);
  }

  // Read by ID
  getIngredientById(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${this.baseUrl}/getbyid/${id}`);
  }

  // Update
  updateIngredient(id: number, ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${this.baseUrl}/edit/${id}`, ingredient)
      .pipe(
        catchError(err => {
          console.error('Error updating ingredient', err);
          return throwError(() => new Error('Error updating ingredient'));
        })
      );
  }

  // Delete
  deleteIngredient(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`)
      .pipe(
        catchError(err => {
          console.error('Error deleting ingredient', err);
          return throwError(() => new Error('Error deleting ingredient'));
        })
      );
  }
}