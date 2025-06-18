import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category, CategoryService } from '../services/category';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './category.html',
  styleUrl: './category.css'
})

export class CategoryComponent implements OnInit{

  newCategory: any = {
    category_id: 0,
    category_name: ''
  }

  searchId : number | null = null;
  searchAttempted : boolean = false;

  foundCategory: Category | null = null;
  categories : Category[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories(){
    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    })
  }

  addCategory(){

    const category : Category = {
      category_name : this.newCategory.category_name
    }
    
    this.categoryService.createCategory(category).subscribe(() =>{
      this.loadAllCategories();
      this.resetform();
    })
  }

  resetform(){
    this.newCategory = {
      category_id: 0,
      category_name: ''
    }
  }

  deleteCategory(id: number) {
    if(confirm('Are you sure you want to delete this category?')) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        this.loadAllCategories();
      });
    }
  }

  getCategorybyId() : void{
    if(this.searchId == null){
      this.searchAttempted = false;
      return;
    }
    else{
      this.searchAttempted = true;
      this.categoryService.getCategoryById(this.searchId).subscribe({
        next: category => {
          this.foundCategory = category;
        }
      })
    }

  }
}
