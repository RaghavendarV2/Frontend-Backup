import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Todos } from './todos/todos';

export const routes: Routes = [
    {path:'', component:Home},
    {path:'todos', component:Todos}
];
