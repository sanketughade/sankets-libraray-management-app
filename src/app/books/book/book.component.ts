import { Component, OnInit } from '@angular/core';
import { Book } from '../books.model';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
books: Book[]=[];
arrayIndex!:number;
areDeleteAndUpdateIconsDisabled: boolean=false;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books=this.booksService.getBooks();
    this.booksService.bookAdded.subscribe(
      (updatedBooks: Book[])=>{
        this.books=updatedBooks;
      }
    );
    this.booksService.isBookUpdatedSuccessfully.subscribe(
      (isBookUpdatedSuccessfully: boolean)=>{
        if(isBookUpdatedSuccessfully){
          this.books=this.booksService.getBooks();
          this.areDeleteAndUpdateIconsDisabled=false;
        }
      }
    )
  }

  deleteBook(id: number){
    this.booksService.deleteBook(id);
    this.books=this.booksService.getBooks();
  }

  updateBook(id: number){
    this.arrayIndex=this.books.findIndex(element => element.id === id);
    this.booksService.bookUpdate.emit(this.booksService.getSingleBook(this.arrayIndex));
    this.books=this.booksService.getBooks();
    this.areDeleteAndUpdateIconsDisabled=true;
 }


}
