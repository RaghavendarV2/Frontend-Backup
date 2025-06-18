import { Routes } from '@angular/router';
import { Home } from './home/home';
import { CategoryComponent } from './category/category';
import { SupplierComponent } from './supplier/supplier';
import { ProductComponent } from './product/product';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'category', component:CategoryComponent},
    {path:'supplier', component:SupplierComponent},
    {path:'product', component:ProductComponent}
];
