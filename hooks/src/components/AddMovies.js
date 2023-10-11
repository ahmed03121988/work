import { useState } from "react";
import "./addMovie.css";

const AddMovies = ({ addNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");
  console.log (name)

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  
  const handleSubmit = () => {
    let newMovie = {
      name,
      description,
      date,
      type,
      link,
      image,
      rating
    };
    addNewMovie(newMovie);
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>++</button>
      
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      <h1 className="addMovie-h1">Add A Movie</h1>
      <form>
          <label>Movie Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label> movie Description </label>
          <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          />
          <label>Movie Release Date</label>
          <input
            type="number"
            name="date"
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Movie Image</label>
          <input
            type="url"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <label>link Image</label>
          <input
            type="url"
            name="link"
            onChange={(e) => setLink(e.target.value)}
          />
          <label>Movie Type</label>
          <input
            type="text"
            name="type"
            onChange={(e) => setType(e.target.value)}
          />
          <label>Movie Rating</label>
          <input
            type="Number"
            name="Rating"
            onChange={(e) => setRating(e.target.value)}
          />
          </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      
    </div>
  );
};
export default AddMovies;
