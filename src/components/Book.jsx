import { useState } from "react";
import useFetch from "../useFetch";

const Book = () => {
  const [successMessage, setSuccessMessage] = useState('')

  const { data, loading, error } = useFetch("http://localhost:3000/books");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;

  const books = data?.book || [];

  const shoeDog = books.find(
    (b) => b.title.toLowerCase() === "shoe dog"
  );

  const booksByHarper = books.filter(
    (b) => b.author.toLowerCase() === "harper lee"
  );

  const handleDelete = async (bookId) => {
    try {
      const response = await fetch(`http://localhost:3000/books/${bookId}`, {
        method: "DELETE"
      },
    )

      if(!response.ok){
        throw "Failed to deleted Book"
      }

      const data = await response.json()
      if(data){
        setSuccessMessage('Movie deleted successfully')
        console.log("Deleted Data: ",data)
        window.location.reload()
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books ? books.map((book) => (
          <li key={book._id} style={{ marginLeft: "10px" }}>
            {book.title} <button onClick={() => handleDelete(book._id)}>Delete</button>
          </li>
        )) : <p>Null</p>}
        <p>{successMessage}</p>
      </ul>

      <h2>Shoe Dog</h2>
      {shoeDog ? (
        <div>
          <p><strong>Author:</strong> {shoeDog.author}</p>
          <p><strong>Release Year:</strong> {shoeDog.publishedYear}</p>
          <p><strong>Genre:</strong> {shoeDog.genre.join(", ")}</p>
        </div>
      ) : (
        <p>No Shoe Dog Book Found</p>
      )}

      <h2>Books by Harper Lee</h2>
      <ul>
        {booksByHarper.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Book;
