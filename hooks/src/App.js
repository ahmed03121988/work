import { useState } from "react";
import { moviesData } from "./components/MoviesData";
import MoviesList from "./components/MoviesList";
import "./styles.css";
import AddMovies from "./components/AddMovies";
import {Routes,Route} from 'react-router-dom'
import Trailler from "./components/Trailler";

// import SearchMovie from "./components/SearchMovie";

export default function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  // const [nameSearch, setNameSearch] = useState("");
  // const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };
  return (
    <div className="wrapper">
      {/* <SearchMovie
        nameSearch={nameSearch}
        setNameSearch={setNameSearch}
        setRatingSearch={setRatingSearch}
      /> */}
      
      
      
      {/* <AddMovies addNewMovie={addNewMovie} /> */}
      <Routes>
        <Route path ="/" element={<MoviesList
        moviesList={moviesList}/>}/>
        <Route path="/detaille/:ID" element={<Trailler
        moviesList={moviesList}/>}/>
      </Routes>
    </div>
  );
}
