import { Component } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  newBookTitle: string = "";
  newBookAuthor: string = "";

  books: Book[] = [];

  /**
   * Adds a new book to the library.
   */
  addBook() {
    // Check if both title and author are not empty or whitespace
    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      // Create a new book object
      let newBook: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      };
      // Add the new book to the library
      this.books.push(newBook);

      // Reset the input fields
      this.newBookTitle = "";
      this.newBookAuthor = "";
    }
  }
}
