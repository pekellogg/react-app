import { useState, useEffect, useInsertionEffect } from 'react';
// import MovieCard from './MovieCard.jsx';
import './App.css';
// import SearchIcon from './search.svg';

// const photosEndPoint = "http://127.0.0.1:3000/api/v1/photos"


function App() {
  // rovers resource
  const roversEndPoint = "http://127.0.0.1:3000/api/v1/rovers";

  const [rovers, setRovers] = useState([]); // init get/set
  // const [searchTerm, setSearchTerm] = useState('');

  // listen for changes to state
  useEffect(() => {

    const fetchRovers = async () => { // async arrow func
      try {
        const response = await fetch(roversEndPoint);
        const roversList = await response.json();
        console.log(roversList); // confirm 
        setRovers(roversList);
      } catch (error) {
        console.log(error) // error.stack more info
      }
    }

    (async () => await fetchRovers())(); // IIFE syntax; invoke at app init to populate Rovers

  }, []) // arr arg makes run 1x at load/runtime

  // const searchRovers = async (rover) => {
  //   const response = await fetch(`${roversEndPoint}&s=${rover}`);
  //   // const response = await fetch(`${endPoint}&s=${rover}`);
  //   const data = await response.json();
  //   console.log(data);
  //   // setRovers(data.Search);
  // }

  return (
    <div className="App">
      <h1>Mars Rovers Photos</h1>
      <div className="search">
        {/* <input
          placeholder="Find photos taken by a Mars rover"
          value={searchTerm}
          onChange={ e => setSearchTerm(e.target.value) }
        /> */}
        {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchRovers(searchTerm)}
        /> */}
      </div>

      {/* { rovers?.length > 0 ? 
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
      } */}
    </div>
  );
  
}

export default App;