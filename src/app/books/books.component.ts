import {ViewChild, ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Book } from './books.model';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit{
  @ViewChild('bookTitle') bookTitle!: ElementRef;
  @ViewChild('bookAuthor') bookAuthor!: ElementRef;
  @ViewChild('bookPages') bookPages!: ElementRef;
  @ViewChild('bookPublication') bookPublication!: ElementRef;
  
  isFormDisabled:boolean=true;
  isAddBook:boolean=true;
  isAddBookDisabled:boolean=false;
  books:Book[]=[];
  bookId!:number;
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
   this.booksService.bookUpdate.subscribe(
     (book: Book)=>{
       this.bookId=book.id,
        this.isFormDisabled=false;
        this.bookTitle.nativeElement.value=book.title;
        this.bookAuthor.nativeElement.value=book.author;
        this.bookPages.nativeElement.value=book.numberOfPages;
        this.bookPublication.nativeElement.value=book.publisher;
        this.isAddBook=false;
        this.isAddBookDisabled=true;
     }
   )
  }

  showForm(isAddBookSelected=false){
    if(this.isFormDisabled){
      this.isFormDisabled=false;
      if(isAddBookSelected){
        this.isAddBook=true;
      }
      else{
        this.isAddBook=false;
      }
      this.onClearFields();
    }
    else if(!this.isFormDisabled && !this.isAddBook){
      this.onClearFields();
      this.isAddBook=true;
    }
    this.isAddBookDisabled=true;
  }

  onAddBook(){
    this.onClearFields();
    this.booksService.addNewBook(
                                  new Book(
                                            this.booksService.getBooks().length-1,
                                            this.bookTitle.nativeElement.value,
                                            this.bookAuthor.nativeElement.value,
                                            this.bookPages.nativeElement.value,
                                            this.bookPublication.nativeElement.value
                                          )
                                )
      this.booksService.bookAdded.emit(this.booksService.getBooks());
      this.isFormDisabled=true;
  }

  onUpdateBook(){
   this.booksService.updateExistingBook(new Book(
        this.bookId,
        this.bookTitle.nativeElement.value,
        this.bookAuthor.nativeElement.value,
        this.bookPages.nativeElement.value,
        this.bookPublication.nativeElement.value
      )
    )
    this.booksService.isBookUpdatedSuccessfully.emit(true);
    this.isFormDisabled=true;
  }
  
  onClearFields(){
        this.bookTitle.nativeElement.value='';
        this.bookAuthor.nativeElement.value='';
        this.bookPages.nativeElement.value='';
        this.bookPublication.nativeElement.value='';
  }

  onCancel(){
    this.onClearFields();
    this.isFormDisabled=true;
    this.isAddBookDisabled=false;
    this.booksService.isBookUpdatedSuccessfully.emit(true);
  }
}
