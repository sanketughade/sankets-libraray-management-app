import { LocationStrategy } from '@angular/common';
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
  bookTitleText: string='';
  bookAuthorText: string='';
  bookPagesText!: number
  bookPublicationText: string='';
  constructor(private booksService: BooksService, private location: LocationStrategy) { this.booksService.bookUpdate.subscribe(
    (book: Book)=>{
       this.isAddBook=false;
       this.isAddBookDisabled=true;
      this.bookId=book.id;
        this.isFormDisabled=false;
        this.bookTitleText=book.title;
        this.bookAuthorText=book.author;
        this.bookPagesText=book.numberOfPages;
        this.bookPublicationText=book.publisher;
        //this.fillInputFields(book.title,book.author,book.numberOfPages,book.publisher);
    }
  );
    history.pushState(null, '', window.location.href);  
    this.location.onPopState(() => {
                history.pushState(null, '', window.location.href);
    });
}

  ngOnInit(): void {
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
    this.booksService.areDeleteAndUpdateIconsDisabled.emit(true);
  }

  
  //   fillInputFields(bookTitle: string, bookAuthor: string, bookPages: number, bookPublication: string){
  //   if(!this.isAddBook && !this.isFormDisabled){
  //     this.bookTitle.nativeElement.value=this.bookTitle;
  //     this.bookAuthor.nativeElement.value=this.bookAuthor;
  //     this.bookPages.nativeElement.value=this.bookPages;
  //     this.bookPublication.nativeElement.value=this.bookPublication;
  //   }
  // }

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
    this.isFormDisabled=false;
        this.bookTitleText='';
        this.bookAuthorText='';
        this.bookPagesText=0;
        this.bookPublicationText='';
  }

  onCancel(){
    this.onClearFields();
    this.isFormDisabled=true;
    this.isAddBookDisabled=false;
    this.booksService.isBookUpdatedSuccessfully.emit(true);
  }
}
