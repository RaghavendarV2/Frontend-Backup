"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookManager = void 0;
class BookManager {
    constructor() {
        this.bookList = [];
    }
    addBook(book) {
        this.bookList.push(book);
    }
    getAllBooks() {
        return this.bookList;
    }
    getBookByTitle(title) {
        for (let i = 0; i < this.bookList.length; i++) {
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
    getBookByAuthor(author) {
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
    getBookByGenre(genre) {
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
    BorrowBook(title) {
        for (let i = 0; i < this.bookList.length; i++) {
            if (this.bookList[i].bookTitle == title) {
                if (this.bookList[i].isAvl == 'Available') {
                    console.log("Book was available and you have borrowed it!");
                    this.bookList[i].isAvl = 'Borrowed';
                }
                else {
                    console.log("Sorry this book is borrowed!");
                }
            }
        }
    }
}
exports.BookManager = BookManager;
