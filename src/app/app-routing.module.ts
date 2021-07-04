import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes=[
  {path:'',component:LoginComponent, pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'books',component:BooksComponent, canActivate: [AuthGuard]},
  {path:'users',component:UsersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
