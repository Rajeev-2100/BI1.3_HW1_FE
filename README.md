# 📚 Book Management Frontend

A React-based frontend application for managing books. This application allows users to add new books, view all books, filter specific books, and delete books by interacting with a REST API.

---

## 🚀 Features

* Add a new book using a form
* Fetch and display all books from the API
* View details of the book **"Shoe Dog"**
* Display books written by **Harper Lee**
* Delete books from the collection
* Custom React Hook for data fetching

---

## 🛠️ Tech Stack

* React
* JavaScript (ES6+)
* React Hooks (`useState`, `useEffect`)
* Fetch API
* Vite

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── AddBookForm.jsx
│   └── Book.jsx
├── useFetch.js
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

### Clone the Repository

```bash
git clone https://github.com/Rajeev-2100/BI1.3_HW1_FE.git
cd BI1.3_HW1
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

---

## 🔗 Backend API

This application consumes the following backend API:

```bash
https://bi-1-3-hw-1-be-u4eh.vercel.app
```

---

## 📖 Features Overview

### Add New Book

Users can submit:

* Title
* Author
* Published Year
* Genre
* Language
* Country
* Rating
* Summary
* Cover Image URL

The form sends a POST request to create a new book.

---

### View All Books

The application fetches all books from:

```http
GET /books
```

and displays them in a list.

---

### Shoe Dog Details

The application searches for the book:

```text
Shoe Dog
```

and displays:

* Author
* Published Year
* Genre

---

### Books by Harper Lee

The application filters and displays books authored by:

```text
Harper Lee
```

---

### Delete Book

Users can remove a book from the database by clicking the Delete button.

```http
DELETE /books/:bookId
```

---

## 🪝 Custom Hook

### useFetch

A reusable custom hook that handles:

* API requests
* Loading state
* Error state
* Data storage 

Example:

```javascript
const { data, loading, error } = useFetch('https://bi-1-3-hw-1-be-u4eh.vercel.app');
```

---

## 📸 Application Flow

1. User fills the Add Book form.
2. Data is sent to the backend API.
3. Books are fetched and displayed.
4. Users can delete books.
5. The UI updates after successful operations.

---

## 🔮 Future Improvements

* Edit book details
* Search books by title
* Filter books by genre
* Pagination
* Toast notifications
* Better UI styling
* State management using Context API

---

## 👨‍💻 Author

**Rajeev Rawat**

Aspiring Full Stack Developer passionate about building practical web applications using React, JavaScript, Node.js, and MongoDB.
