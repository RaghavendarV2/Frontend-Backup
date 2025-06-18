import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface Category {
  categoryId?: number;
  categoryName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = 'http://172.24.60.170:8098/category';

  constructor(private http: HttpClient) { }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(`${this.baseUrl}/create`, category).pipe(
      catchError(error => {
        console.error('Error adding category:', error);
        return throwError(() => new Error('Something went wrong while adding the Category'));
      })
    );
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/show/list`);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/getbyid/${id}`);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`).pipe(
      catchError(error => {
        console.error('Error deleting category:', error);
        return throwError(() => new Error('Something went wrong while deleting the Category'));
      })
    );
  }
}
