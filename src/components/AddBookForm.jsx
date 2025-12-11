import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImgUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "publishedYear" || name === "rating"
          ? value === "" ? "" : parseInt(value)
          : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw "Failed to add book";

      const data = await response.json();
      console.log("Book Added:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Author:</label><br />
          <input
            type="text"
            value={formData.author}
            name="author"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Published Year:</label><br />
          <input
            type="number"
            value={formData.publishedYear}
            name="publishedYear"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Genre:</label><br />
          <input
            type="text"
            value={formData.genre}
            name="genre"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Language:</label><br />
          <input
            type="text"
            value={formData.language}
            name="language"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Country:</label><br />
          <input
            type="text"
            value={formData.country}
            name="country"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Rating:</label><br />
          <input
            type="number"
            value={formData.rating}
            name="rating"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Summary:</label><br />
          <input
            type="text"
            value={formData.summary}
            name="summary"
            onChange={handleChange}
          />
        </div><br />

        <div>
          <label>Cover Image URL:</label><br />
          <input
            type="text"
            value={formData.coverImgUrl}
            name="coverImgUrl"
            onChange={handleChange}
          />
        </div><br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddBookForm;
