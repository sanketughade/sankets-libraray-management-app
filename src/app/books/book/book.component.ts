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
isLibraryEmpty!:boolean;
areDeleteAndUpdateIconsDisabled: boolean=false;
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.books=this.booksService.getBooks();
    this.isLibraryEmpty=this.books.length==0 ? true : false;
    this.booksService.bookAdded.subscribe(
      (updatedBooks: Book[])=>{
        this.books=updatedBooks;
        this.isLibraryEmpty=false;
        this.areDeleteAndUpdateIconsDisabled=false;
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

    this.booksService.areDeleteAndUpdateIconsDisabled.subscribe(
      (areDeleteAndUpdateIconsDisabledRecieved: boolean)=>{
        this.areDeleteAndUpdateIconsDisabled=areDeleteAndUpdateIconsDisabledRecieved;
      }
    )
  }

  deleteBook(id: number){
    this.booksService.deleteBook(id);
    this.books=this.booksService.getBooks();
    this.isLibraryEmpty=this.books.length==0 ? true : false;
  }

  updateBook(id: number){
    this.arrayIndex=this.books.findIndex(element => element.id === id);
    this.booksService.bookUpdate.emit(this.booksService.getSingleBook(id));
    this.books=this.booksService.getBooks();
    this.areDeleteAndUpdateIconsDisabled=true;
 }


}
