import { Genre } from "./Genre";

export interface Book{
    bookTitle:string;
    authorName:string;
    genre:Genre;
    isAvl: 'Available' | 'Borrowed';
}