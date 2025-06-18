"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Available = void 0;
class Available {
    constructor(bookTitle, authorName, genre) {
        this.bookTitle = bookTitle;
        this.authorName = authorName;
        this.genre = genre;
        this.isAvl = 'Available';
        this.splMsg = 'You can Borrow this book!';
    }
}
exports.Available = Available;
