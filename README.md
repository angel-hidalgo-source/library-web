## Library Management System

This is a simple web application built with React and TypeScript for managing a library's book inventory. It allows users to:

-   **View a list of books:**  The application displays a table listing all available books, including their title, author, total copies, and available copies.
-   **Add new books:**  Users can add new books to the inventory by providing the title, author, and number of copies.
-   **Lend books:**  Users can lend books from the inventory, which decreases the number of available copies.
-   **Return books:**  Users can return borrowed books, which increases the number of available copies.
-   **Delete books:**  Users can remove books from the inventory.

### Features

-   **Data persistence:**  The application fetches and updates book data from a backend API (running on  `http://localhost:XXXX/api/books`).
-   **Error handling:**  The application handles potential errors during data fetching and updates, displaying appropriate error messages to the user.
-   **User feedback:**  The application provides visual feedback to the user through toast notifications for successful actions and error messages.

### Technologies Used

-   **React:**  A JavaScript library for building user interfaces.
-   **TypeScript:**  A superset of JavaScript that adds static typing for improved code quality and maintainability.
-   **React-toastify:**  A library for displaying toast notifications.

### Getting Started

1.  **Clone the repository:**
    
    ```bash
    git clone https://github.com/angel-hidalgo-source/library-web.git
    ```
    
2.  **Install dependencies:**
    
    ```bash
    npm install
    ```
    
3.  **Start the development server:**
    
    ```bash
    npm start
    ```
    
4.  **Access the application:**  Open  `http://localhost:XXXX/`  in your web browser.

### Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

### License

This project is licensed under the MIT License.