import { Component, OnInit } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books:Book[]=[];
  constructor() { }

  ngOnInit(): void {
   
  }

}
