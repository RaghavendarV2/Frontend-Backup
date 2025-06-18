import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Category, CategoryService } from '../service/service';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-category-component',
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './category-component.html',
  styleUrls: ['./category-component.css']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  newCategory: Category = { categoryName: '' };
  categoryById?: Category;
  searchId: number = 0;

  constructor(
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories(): void {
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
      this.cdr.detectChanges();
    });
  }

  addCategory(): void {
    this.categoryService.addCategory(this.newCategory).subscribe(data => {
      this.categories.push(data);
      this.newCategory = { categoryName: '' };
      this.cdr.detectChanges();
    });
  }

  getCategoryById(): void {
    const idNum = Number(this.searchId);
    this.categoryService.getCategoryById(idNum).subscribe({
      next: data => {
        this.categoryById = data;
        this.cdr.detectChanges();
      },
      error: () => {
        this.categoryById = undefined;
        this.cdr.detectChanges();
      }
    });
  }

  deleteCategory(id: number): void {
    if (!confirm(`Really delete category #${id}?`)) {
      return;
    }
    this.categoryService.deleteCategory(id).subscribe(() => {
    
      this.categories = this.categories.filter(c => c.categoryId !== id);
      if (this.categoryById?.categoryId === id) {
        this.categoryById = undefined;
      }
      this.cdr.detectChanges();
    });
  }
}