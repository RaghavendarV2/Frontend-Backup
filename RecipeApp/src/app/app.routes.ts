import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { CategoryComponent } from './category-component/category-component';
import { IngredientComponent } from './ingredient-component/ingredient-component';
import { RecipeComponent } from './recipe-component/recipe-component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'category', component:CategoryComponent},
    {path:'ingredient', component:IngredientComponent},
    {path:'recipe', component:RecipeComponent}
];
