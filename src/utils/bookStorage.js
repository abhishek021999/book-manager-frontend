const BOOKS_KEY = 'books';

export function getBooks() {
  const books = localStorage.getItem(BOOKS_KEY);
  return books ? JSON.parse(books) : [];
}

export function saveBooks(books) {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
}

export function addBook(book) {
  const books = getBooks();
  book.id = Date.now().toString();
  books.push(book);
  saveBooks(books);
  return book;
}

export function getBookById(id) {
  return getBooks().find(b => String(b.id) === String(id));
}

