import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecipeResponseDTO, CategoryDTO, Recipe, RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipe',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './recipe-component.html',
  styleUrls: ['./recipe-component.css']
})
export class RecipeComponent implements OnInit {
  recipes: RecipeResponseDTO[] = [];
  categories: CategoryDTO[] = []; // For category dropdown
  selectedCategoryId: number | null = null;

  newRecipe: Recipe = {
    recipeName: '',
    description: '',
    cookingTime: 0,
    categoryId: 0,
    ingredientIds: []
  };
  ingredientIdsInput: string = '';

  greetmsg: string = 'hello guys!';

  searchId: number | null = null;
  foundRecipe: RecipeResponseDTO | null = null;
  searchAttempted: boolean = false;

  constructor(private recipeService: RecipeService,
              private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadAllCategories();
    this.loadAllRecipes();
  }

  loadAllRecipes(): void {
    this.recipeService.getAllRecipes().subscribe(data => {
      this.recipes = data;
      this.cdr.detectChanges();
    });
  }

  loadAllCategories(): void {
    this.recipeService.getAllCategories?.().subscribe({
      next: cats => {
        this.categories = cats;
        this.cdr.detectChanges();
      },
      error: () => {
        this.categories = [];
        this.cdr.detectChanges();
      }
    });
  }

  onCategoryChange(): void {
    if (this.selectedCategoryId) {
      this.recipeService.getRecipesByCategory(this.selectedCategoryId).subscribe(data => {
        this.recipes = data;
        this.cdr.detectChanges();
      });
    } else {
      this.loadAllRecipes();
    }
  }

  addRecipe(): void {
    this.recipeService.createRecipe(this.newRecipe).subscribe({
      next: created => {
        this.loadAllRecipes();
        // Reset form
        this.newRecipe = {
          recipeName: '',
          description: '',
          cookingTime: 0,
          categoryId: 0,
          ingredientIds: []
        };
        this.ingredientIdsInput = '';
        this.cdr.detectChanges();
      },
      error: err => {
        console.error('Error creating recipe:', err);
        this.cdr.detectChanges();
      }
    });
  }

  onIngredientIdsChange(value: string): void {
    this.newRecipe.ingredientIds = value
      .split(',')
      .map(v => +v.trim())
      .filter(v => !isNaN(v));
    this.cdr.detectChanges();
  }

  findRecipeById(): void {
    if (this.searchId == null) {
      this.foundRecipe = null;
      this.searchAttempted = false;
      this.cdr.detectChanges();
      return;
    }

    this.searchAttempted = true;
    this.recipeService.getRecipeById(this.searchId).subscribe({
      next: recipe => {
        this.foundRecipe = recipe;
        this.cdr.detectChanges();
      },
      error: () => {
        this.foundRecipe = null;
        this.cdr.detectChanges();
      }
    });
  }
}
