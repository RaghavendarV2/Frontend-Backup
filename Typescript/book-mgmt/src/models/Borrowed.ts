import { Book } from "./Book";
import { Genre } from "./Genre";

export class Borrowed implements Book {
    bookTitle: string;
    authorName: string;
    genre: Genre;
    isAvl: 'Borrowed';

    splMsg: string;

    constructor(bookTitle: string, authorName: string, genre:Genre){
        this.bookTitle = bookTitle;
        this.authorName = authorName;
        this.genre = genre;
        this.isAvl = 'Borrowed';
        this.splMsg = 'Sorry, This book is not avalable'
    }
}