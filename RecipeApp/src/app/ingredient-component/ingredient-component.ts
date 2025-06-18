import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Ingredient, IngredientService } from '../service/ingredient.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ingredient-component',
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './ingredient-component.html',
  styleUrl: './ingredient-component.css'
})
export class IngredientComponent implements OnInit {
  ingredients: Ingredient[] = [];
  newIngredient: Ingredient = { ingredientName: '', quantity: '' };
  searchId: number = 0;
  ingredientById?: Ingredient;
  editIngredient: Ingredient = { ingredientName: '', quantity: '' };
  viewMode = 'table'; 

  constructor(
    private ingredientService: IngredientService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.ingredientService.getAllIngredients().subscribe(list => {
      this.ingredients = list;
      this.cdr.detectChanges();
    });
  }

  add(): void {
    this.ingredientService.addIngredient(this.newIngredient).subscribe(created => {
      this.ingredients.push(created);
      this.newIngredient = { ingredientName: '', quantity: '' };
      this.cdr.detectChanges();
    });
  }

  findById(): void {
    this.ingredientService.getIngredientById(this.searchId).subscribe({
      next: ing => {
        this.ingredientById = ing;
        this.editIngredient = { ...ing };
        this.cdr.detectChanges();
      },
      error: () => {
        this.ingredientById = undefined;
        this.cdr.detectChanges();
      }
    });
  }

  update(): void {
    if (!this.ingredientById) { return; }
    const id = this.ingredientById.ingredientId!;
    this.ingredientService.updateIngredient(id, this.editIngredient).subscribe(updated => {
      const idx = this.ingredients.findIndex(i => i.ingredientId === id);
      if (idx > -1) this.ingredients[idx] = updated;
      this.ingredientById = updated;
      this.cdr.detectChanges();
    });
  }

  delete(id: number): void {
    if (!confirm(`Delete ingredient #${id}?`)) { return; }
    this.ingredientService.deleteIngredient(id).subscribe(() => {
      this.ingredients = this.ingredients.filter(i => i.ingredientId !== id);
      if (this.ingredientById?.ingredientId === id) {
        this.ingredientById = undefined;
      }
      this.cdr.detectChanges();
    });
  }
}