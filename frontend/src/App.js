import { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';
import './App.css';
import SearchIcon from './search.svg';

const endPoint = 'http://www.omdbapi.com/?i=tt3896198&apikey=f152334e';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${endPoint}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  return (
    <div className="App">
      <h1>Movie-Search</h1>
      <div className="search">
        <input
          placeholder="Find a movie"
          value={searchTerm}
          onChange={ e => setSearchTerm(e.target.value) }
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      { movies?.length > 0 ? 
        (
          <div className="container">
            { movies.map(m => <MovieCard movie={ m }/>) }
          </div>
        ) : 
        (
          <div className="empty">
            <h2>Could not find movies.</h2>
          </div>
        )
      }
    </div>
  );
  
}

export default App;