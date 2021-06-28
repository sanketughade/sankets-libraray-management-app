import { Component, OnInit } from '@angular/core';
import { Book } from '../books.model';
import { BooksService } from '../books.service';
import { ToastrNotificationService} from '../../toast.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers:[BooksService]
})
export class BookComponent implements OnInit {
books: Book[]=[];
  constructor(private booksService: BooksService,private toastrNotificationService: ToastrNotificationService) { }

  ngOnInit(): void {
    this.books=this.booksService.getBooks();
  }

  deleteBook(id: number){
    this.booksService.deleteBook(id);
    this.books=this.booksService.getBooks();
    this.toastrNotificationService.showSuccess('<div style=\"background-color: red\"><p style=\"color: white\">Book deleted successfully.</p>','<h2 style=\"color: white\">Deleted Successfully</h2></div>')
  }


}
