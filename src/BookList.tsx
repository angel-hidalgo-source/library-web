import { useState } from "react";
import { Book, SelectedBook } from './types';

interface Props {
  books: Book[];
  onDeleteBook: (book: Book) => void;
  onLendBook: (book: Book) => void;
  onReturnBook: (book: Book) => void;
}

function BookList(props: Props) {
  const [selectedBook, setSelectedBook] = useState<SelectedBook | null>(null);

  const handleButtonClick = (book: Book, action: 'Lend' | 'Return' | 'Delete') => {
    setSelectedBook({ ...book, action });
  };

  const closeModal = () => {
    setSelectedBook(null);
  };



  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Id</th>
            <th className="py-2">Title</th>
            <th className="py-2">Author</th>
            <th className="py-2">Copies</th>
            <th className="py-2">Available Copies</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((book) => (
            <tr key={book.id} className="text-center">
              <td className="border px-4 py-2">{book.id}</td>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">{book.copies}</td>
              <td className="border px-4 py-2">{book.availableCopies}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleButtonClick(book, 'Lend')}
                >
                  Lend
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() => handleButtonClick(book, 'Return')}
                >
                  Return
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() => handleButtonClick(book, 'Delete')}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedBook && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">{selectedBook.action.toUpperCase()} Book</h2>
            <p><strong>Id:</strong> {selectedBook.id}</p>
            <p><strong>Title:</strong> {selectedBook.title}</p>
            <p><strong>Author:</strong> {selectedBook.author}</p>
            <p><strong>Copies:</strong> {selectedBook.copies}</p>
            <p><strong>Available Copies:</strong> {selectedBook.availableCopies}</p>
            <div className="mt-4 flex justify-end">
              <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => {
                if (selectedBook.action === 'Lend') {
                  props.onLendBook(selectedBook);
                  closeModal();
                } else if (selectedBook.action === 'Return') {
                  props.onReturnBook(selectedBook);
                  closeModal();
                } else if (selectedBook.action === 'Delete') {
                  props.onDeleteBook(selectedBook);
                  closeModal();
                }
              }} >{selectedBook.action.toString()}</button>
              <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookList;
