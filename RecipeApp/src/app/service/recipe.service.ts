import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interfaces based on your backend DTOs
export interface IngredientDTO {
  ingredientId: number;
  ingredientName: string;
  quantity: string;
}

export interface CategoryDTO {
  categoryId: number;
  categoryName: string;
}

export interface Recipe {
  recipeId?: number;
  recipeName: string;
  description: string;
  cookingTime: number;
  categoryId: number;
  ingredientIds: number[];
}

export interface RecipeResponseDTO {
  recipeId: number;
  recipeName: string;
  description: string;
  cookingTime: number;
  categoryDTO: CategoryDTO;
  ingredients: IngredientDTO[];
}

@Injectable({
  providedIn: 'root'
})

export class RecipeService {
  private apiUrl = 'http://172.24.60.170:8100/recipe';
  private categoryApiUrl = 'http://localhost:8098/category';

  constructor(private http: HttpClient) {}

  // Create a new recipe
  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(`${this.apiUrl}/create`, recipe);
  }

  // Get a recipe by ID
  getRecipeById(id: number): Observable<RecipeResponseDTO> {
    return this.http.get<RecipeResponseDTO>(`${this.apiUrl}/getbyid/${id}`);
  }

  // Edit/update a recipe by ID
  editRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/edit/${id}`, recipe);
  }

  // Get all recipes
  getAllRecipes(): Observable<RecipeResponseDTO[]> {
    return this.http.get<RecipeResponseDTO[]>(`${this.apiUrl}/getall`);
  }


  getAllCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.categoryApiUrl}/getall`);
  }
  // Get recipes by category ID
  getRecipesByCategory(catid: number): Observable<RecipeResponseDTO[]> {
    return this.http.get<RecipeResponseDTO[]>(`${this.apiUrl}/getbycat/${catid}`);
  }
}
