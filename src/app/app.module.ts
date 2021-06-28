import { NgModule } from '@angular/core';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { BooksService } from './books/books.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { BookComponent } from './books/book/book.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes=[
  {path:'books',component:BooksComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    UsersComponent,
    BookComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgxBootstrapIconsModule.pick(allIcons,{ 
      width: '30px', 
      height: '30px',}),
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
