import { Book } from "./Book";
import { Genre } from "./Genre";

export class Available implements Book {
    bookTitle: string;
    authorName: string;
    genre: Genre;
    isAvl: 'Available';

    splMsg:string;

    constructor(bookTitle: string, authorName: string, genre:Genre){
        this.bookTitle = bookTitle;
        this.authorName = authorName;
        this.genre = genre;
        this.isAvl = 'Available';
        this.splMsg = 'You can Borrow this book!'
    }
}