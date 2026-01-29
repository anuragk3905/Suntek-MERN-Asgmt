// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)

//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise

class Book{
    constructor(title,author,pages,isAvailable=true){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }

    borrow(){
        this.isAvailable=false;
    }

    returnBook(){
        this.isAvailable=true;
    }

    getInfo(){
        return `${this.title} by ${this.author} (${this.pages} pages)`;
    }

    isLongBook(){
        return this.pages>300;
    }
}


//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.

let book1 = new Book("Harry Potter", "J.K. Rowling", 350);
let book2 = new Book("1984", "George Orwell", 328);
let book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
let book4 = new Book("The Alchemist", "Paulo Coelho", 197);
let book5 = new Book("To Kill a Mockingbird", "Harper Lee", 281);

const library = [book1, book2, book3, book4, book5];

//   2. Perform the following operations:

//       i. Display info of all books

library.forEach(book => console.log(book.getInfo()));

//       ii. Borrow 2 books and show their availability status

book1.borrow();
book3.borrow();

library.forEach(book => console.log(`${book.title}: ${book.isAvailable}`));

//       iii. Return 1 book and show updated status

book1.returnBook();

library.forEach(book => console.log(`${book.title}: ${book.isAvailable}`));

//       iv. Count how many books are "long books" (more than 300 pages)

const longBookCount = library.filter(book => book.isLongBook()).length;
console.log(`Number of long books (>300 pages): ${longBookCount}`);

//       v. List all available books

const availableBooks = library.filter(book => book.isAvailable);
console.log("Available Books:");
availableBooks.forEach(book => console.log(book.getInfo()));