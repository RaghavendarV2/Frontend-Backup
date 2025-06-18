import { Available } from "./models/Available";
import { BookManager } from "./models/BookManager";
import { Borrowed } from "./models/Borrowed";
import { Genre } from "./models/Genre";

const manager = new BookManager();


manager.addBook(new Available("The Martian", "Andy Weir", Genre.scifiGenre));
manager.addBook(new Borrowed("Hitchhiker's Guide", "Douglas Adams", Genre.scifiGenre));
manager.addBook(new Available("The Alchemist", "Paulo Coelho", Genre.fictionGenre));
manager.addBook(new Available("Good Omens", "Neil Gaiman", Genre.comedyGenre));


console.log("All Books:");
console.log(manager.getAllBooks());


console.log("\nSearch by Title: 'The Martian'");
console.log(manager.getBookByTitle("The Martian"));


console.log("\nSearch by Author: 'Neil Gaiman'");
console.log(manager.getBookByAuthor("Neil Gaiman"));


console.log("\nSearch by Genre: Genre.scifiGenre");
console.log(manager.getBookByGenre(Genre.scifiGenre));


console.log("\nBorrowing 'The Alchemist':");
manager.BorrowBook("The Alchemist");
console.log(manager.getBookByTitle("The Alchemist"));


console.log("\nBorrowing 'Hitchhiker's Guide':");
manager.BorrowBook("Hitchhiker's Guide");


console.log("\nBorrowing 'The Alchemist' again:");
manager.BorrowBook("The Alchemist");
