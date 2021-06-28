export class Book{
    constructor(public id: number,
                public title: string, 
                public author: string, 
                public numberOfPages: number, 
                public publisher: string
                )
                {
                    this.title=title;
                    this.author=author;
                    this.numberOfPages=numberOfPages;
                    this.publisher=publisher;
                }
}