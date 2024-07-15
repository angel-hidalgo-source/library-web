import { useState } from "react";
import { Book } from './types';

interface BookDetailsProps {
  book: Book;
  onDeleteBook: (bookId: number) => void;
  onLendBook: (bookId: number) => void;
  onReturnBook: (bookId: number) => void;
}

function BookDetails( book: Book) {
  
  const [selectedBook, setSelectedBook] = useState(null);
  
  const handleButtonClick = (book: Book, action: any) => {
    setSelectedBook({ ...book, action });
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{book.title}</h2>
      <p className="text-gray-700">Author: {book.author}</p>
      <p className="text-gray-700">Copies: {book.copies}</p>
      <p className="text-gray-700">Available: {book.availableCopies}</p>
    </div>
  );
}

export default BookDetails;