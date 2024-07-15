import { useState, useEffect } from 'react';
import BookList from './BookList';
import AddBook from './AddBook';
import { Book } from './types';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5118/api/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data: Book[] = await response.json();
        setBooks(data);
      } catch (err) {
        let message;
        if (err instanceof Error) message = err.message;
        else message = String(err);
        toast.error(message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const addBook = async (newBook: Book) => {
    try {
      const response = await fetch('http://localhost:5118/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBook),
      });
      if (!response.ok) {
        throw new Error('Failed to add book');
      }
      const data: Book = await response.json();
      setBooks([...books, data]);
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      toast.error(message);
    }
  };

  const deleteBook = async (book: Book) => {
    try {
      const response = await fetch(`http://localhost:5118/api/books/${book.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete book');
      }
      setBooks(books.filter((thisBook) => thisBook.id !== book.id));
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);

      toast.error(message);
    }
  };
  
  const LendBook = async (book: Book) => {
    try {
      const response = await fetch(`http://localhost:5118/api/books/${book.id}/lend`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to lend book');
      }
      
      const objIndex = books.findIndex((obj => obj.id === book.id));
      books[objIndex].availableCopies -= 1;
      setBooks([...books]);
      
    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      toast.error(message);
          }
  };

  const ReturnBook = async (book: Book) => {
    try {
      const response = await fetch(`http://localhost:5118/api/books/${book.id}/return`, {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to return book');
      }
      
      const objIndex = books.findIndex((obj => obj.id === book.id));
      books[objIndex].availableCopies += 1;
      setBooks([...books]);

    } catch (err) {
      let message;
      if (err instanceof Error) message = err.message;
      else message = String(err);
      toast.error(message);
    }
  };
  

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Library Management System</h1>
      {isLoading && <p>Loading books...</p>}
      <ToastContainer />
      <BookList books={books} onDeleteBook={deleteBook} onLendBook={LendBook} onReturnBook={ReturnBook} />
      <AddBook onAddBook={addBook} />
    </div>
  );
}

export default App;
