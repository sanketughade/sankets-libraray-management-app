import { EventEmitter,Injectable } from '@angular/core';
import { Book } from './books.model';

@Injectable()
export class BooksService{
    private books:Book[]= [
                            new Book(1,'Book 1','Author 1',100,'Publisher 1'),
                            new Book(2,'Book 2','Author 2',200,'Publisher 2'),
                            new Book(3,'Book 3','Author 3',300,'Publisher 3'),
                            new Book(4,'Book 4','Author 4',400,'Publisher 4'),
                            new Book(5,'Book 5','Author 5',500,'Publisher 5')
                          ]
    arrayIndex!:number;
    bookAdded= new EventEmitter<Book[]>();
    bookUpdate = new EventEmitter<Book>();
    isBookUpdatedSuccessfully= new EventEmitter<boolean>();
    getBooks(){
        return this.books.slice();
    }

    deleteBook(id: number){
        //index = a.findIndex(x => x.prop2 ==="yutu");
        this.arrayIndex=this.books.findIndex(element => element.id === id);
        this.books.splice(this.arrayIndex,1);
    }

    addNewBook(book: Book){
        this.books.push(book);
    }

    getSingleBook(id: number){
        return this.books[id];
    }

    updateExistingBook(book: Book){
        this.arrayIndex=this.books.findIndex(element => element.id === book.id);
        this.books[this.arrayIndex]=book;
    }
}