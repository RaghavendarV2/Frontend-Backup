import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Category{
  category_id?: number;
  category_name?: string
}

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private baseUrl = "http://ks20l1015:8095/category"
  
  constructor(private http : HttpClient) { }

  createCategory(category : Category) : Observable<Category>{
    return this.http.post<Category>(`${this.baseUrl}/create`, category);
  }

  getCategoryById(id : number) : Observable<Category>{
    return this.http.get<Category>(`${this.baseUrl}/getbyid/${id}`);
  }

  getAllCategories() : Observable<Category[]>{
    return this.http.get<Category[]>(`${this.baseUrl}/getall`);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delbyid/${id}`);
  }
}
