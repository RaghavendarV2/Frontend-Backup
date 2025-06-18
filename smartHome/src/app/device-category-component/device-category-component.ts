import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService, DeviceCategory } from '../services/category-service';

@Component({
  selector: 'app-device-category-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './device-category-component.html',
  styleUrl: './device-category-component.css'
})
export class DeviceCategoryComponent {
  newCategory : any = {
    categoryName: ''
  }

  searchId : number | null = null;
  searchAttempted: boolean = false;
  foundCategory : DeviceCategory | null = null;

  constructor(private categoryService:CategoryService){}

  ngOnInit(): void {
  
  }

  addCategory(){
    const category : DeviceCategory = {
      categoryName: this.newCategory.categoryName
    };

    this.categoryService.addDeviceCategory(category).subscribe(() => {
      this.resetForm();
    })

  }

  resetForm(){
    this.newCategory = {
      categoryName: ''
    }
  }

  getCategoryById(){
    if(this.searchId == null){
      this.foundCategory = null;
      this.searchAttempted = false;
      return;
    }
    else{
      this.searchAttempted = true;
      this.categoryService.getCategoryById(this.searchId).subscribe({
        next : category => {
          this.foundCategory = category;
        }
      })

    }
  }
}
