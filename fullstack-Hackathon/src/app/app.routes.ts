import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProjectComponent } from './project-component/project-component';
import { UserComponent } from './user-component/user-component';
import { TaskComponent } from './task-component/task-component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'project', component:ProjectComponent},
    {path:'user', component:UserComponent},
    {path:'task', component:TaskComponent}
];
