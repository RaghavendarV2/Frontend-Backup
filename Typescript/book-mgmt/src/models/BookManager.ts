import { Book } from "./Book";
import { Genre } from "./Genre";

export class BookManager {
    bookList: Book[] = [];

    constructor() { }

    addBook(book: Book): void {
        this.bookList.push(book);
    }

    getAllBooks(): Book[] {
        return this.bookList;
    }

    getBookByTitle(title: string): { bookTitleReturn: string, authorNameReturn: string, genreReturn: Genre, isAvlReturn: 'Available' | 'Borrowed' } | undefined {
        for (let i: number = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].bookTitle == title) {
                return {
                    bookTitleReturn: this.bookList[i].bookTitle,
                    authorNameReturn: this.bookList[i].authorName,
                    genreReturn: this.bookList[i].genre,
                    isAvlReturn: this.bookList[i].isAvl
                };
            }
        }
    }

    getBookByAuthor(author: string): { bookTitleReturn: string, authorNameReturn: string, genreReturn: Genre, isAvlReturn: 'Available' | 'Borrowed' } | undefined {
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].authorName === author) {
                return {
                    bookTitleReturn: this.bookList[i].bookTitle,
                    authorNameReturn: this.bookList[i].authorName,
                    genreReturn: this.bookList[i].genre,
                    isAvlReturn: this.bookList[i].isAvl
                };
            }
        }
    }

    getBookByGenre(genre: Genre): { bookTitleReturn: string, authorNameReturn: string, genreReturn: Genre, isAvlReturn: 'Available' | 'Borrowed' } | undefined {
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].genre === genre) {
                return {
                    bookTitleReturn: this.bookList[i].bookTitle,
                    authorNameReturn: this.bookList[i].authorName,
                    genreReturn: this.bookList[i].genre,
                    isAvlReturn: this.bookList[i].isAvl
                };
            }
        }
    }

    BorrowBook(title: string): void {
        for (let i: number = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].bookTitle == title) {
                if(this.bookList[i].isAvl == 'Available'){
                    console.log("Book was available and you have borrowed it!");
                    this.bookList[i].isAvl = 'Borrowed';
                }
                else{
                    console.log("Sorry this book is borrowed!");
                }
            }
        }
    }

}