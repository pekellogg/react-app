import { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';
import './App.css';
import SearchIcon from './search.svg';

// const photosEndPoint = "http://127.0.0.1:3000/api/v1/photos"
const roversEndPoint = "http://127.0.0.1:3000/api/v1/rovers"
// const endPoint = 'http://www.omdbapi.com/?i=tt3896198&apikey=f152334e';

function App() {
  const [rovers, setRovers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchRovers = async (rover) => {
    const response = await fetch(`${roversEndPoint}&s=${rover}`);
    // const response = await fetch(`${endPoint}&s=${rover}`);
    const data = await response.json();
    console.log(data);
    // setRovers(data.Search);
  }

  return (
    <div className="App">
      <h1>Mars Rovers Photos</h1>
      <div className="search">
        <input
          placeholder="Find photos taken by a Mars rover"
          value={searchTerm}
          onChange={ e => setSearchTerm(e.target.value) }
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchRovers(searchTerm)}
        />
      </div>

      { rovers?.length > 0 ? 
        (
          <div className="container">
            { rovers.map(m => <MovieCard movie={ m }/>) }
          </div>
        ) : 
        (
          <div className="empty">
            <h2>Could not find rovers.</h2>
          </div>
        )
      }
    </div>
  );
  
}

export default App;