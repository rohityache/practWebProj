import { Routes } from '@angular/router';
import { DirectivePracComponent } from './directive-prac/directive-prac.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'directive-prac', component:DirectivePracComponent},
    {path:'login', component: LoginComponent}
];
