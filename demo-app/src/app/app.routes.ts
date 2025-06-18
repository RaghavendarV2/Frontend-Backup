import { Routes } from '@angular/router';
import { AddCustomer } from './add-customer/add-customer';
import { Home } from './home/home';
import { Recipe } from './recipe/recipe';

export const routes: Routes = [
    {path: '', component : Home},
    {path: 'add-customer', component : AddCustomer},
    {path: 'show-recipe', component : Recipe}
];
