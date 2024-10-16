// Define an iterator interface following TypeScript's Iterator protocol
interface Iterator<T> {
    next(): IteratorResult<T>;
    hasNext(): boolean;
}

// Define a collection interface
interface IterableCollection<T> {
    createIterator(): Iterator<T>;
}

// Implement a concrete collection
class Library implements IterableCollection<Book> {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    createIterator(): Iterator<Book> {
        return new BookIterator(this.books);
    }
}

// Implement a Book class
class Book {
    constructor(public title: string, public author: string) {}
}

// Implement a concrete iterator following TypeScript's Iterator protocol
class BookIterator implements Iterator<Book> {
    private index = 0;

    constructor(private books: Book[]) {}

    next(): IteratorResult<Book> {
        if (this.hasNext()) {
            const result = { value: this.books[this.index], done: false };
            this.index++;
            return result;
        } else {
            return { value: null as any, done: true };
        }
    }

    hasNext(): boolean {
        return this.index < this.books.length;
    }
}

// Client code
const library = new Library();
library.addBook(new Book('The Village in the Jungle', 'Leonard   Woolf'));
library.addBook(new Book('Running in the Family', 'Michael Ondaatje'));

const iterator = library.createIterator();

let iterationResult = iterator.next();
while (!iterationResult.done) {
    console.log(`${iterationResult.value.title} by ${iterationResult.value.author}`);
    iterationResult = iterator.next();
}

/* Output: tsc IteratorPattern.ts, node IteratorPattern.js */

// The Village in the Jungle by Leonard   Woolf
// Running in the Family by Michael Ondaatje
