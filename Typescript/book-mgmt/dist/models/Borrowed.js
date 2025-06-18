"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Borrowed = void 0;
class Borrowed {
    constructor(bookTitle, authorName, genre) {
        this.bookTitle = bookTitle;
        this.authorName = authorName;
        this.genre = genre;
        this.isAvl = 'Borrowed';
        this.splMsg = 'Sorry, This book is not avalable';
    }
}
exports.Borrowed = Borrowed;
