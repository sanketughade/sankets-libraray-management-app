import { Book } from './books.model';

export class BooksService{
    private books:Book[]= [
                            new Book('Book 1','Author 1',100,'Publisher 1'),
                            new Book('Book 2','Author 2',200,'Publisher 2'),
                            new Book('Book 3','Author 3',300,'Publisher 3'),
                            new Book('Book 4','Author 4',400,'Publisher 4'),
                            new Book('Book 5','Author 5',500,'Publisher 5')
                          ]

    getBooks(){
        return this.books.slice();
    }

    deleteBook(id: number){
        this.books.splice(id,1);
    }
}