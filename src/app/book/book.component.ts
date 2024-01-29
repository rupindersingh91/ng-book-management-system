import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  newBookTitle: string = "";
  newBookAuthor: string = "";

  books: Book[] = [];

  /**
   * Initializes the component when it is first loaded.
   * Retrieves saved books from local storage and updates the component's state.
   */
  ngOnInit(): void {
    // Retrieve saved books from local storage
    let savedBooks = localStorage.getItem("books");
    // Update component's state with saved books, or initialize as empty array if no saved books exist
    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }

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

      // save books data to local storage
      localStorage.setItem("books", JSON.stringify(this.books))
    }
  }
}
