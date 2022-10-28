import React from 'react';
import { useState, useEffect} from 'react';
import RoverShowcase from './RoverShowcase';
import './App.css';

function App() {
  const roversEndPoint = "http://127.0.0.1:3000/api/v1/rovers";
  const photosEndPoint = "http://127.0.0.1:3000/api/v1/photos";

  // init get/set
  const [rovers, setRovers] = useState([]);
  const [photos, setPhotos] = useState([]); 

  // see unsuccessful server response
  const [fetchError, setFetchError] = useState();

  // listen for state changes
  // 2nd arg, empty Array makes useEffect() run 1x at load/app runtime
  useEffect(() => {

    const fetchRovers = async () => { // async arrow func
      try {
        const response = await fetch(roversEndPoint);

        // if !200 successful response
        if (!response.ok) throw Error("Could not fetch resource");

        const roversList = await response.json();
        console.table(roversList); // confirm 
        setRovers(roversList);
        setFetchError(null);
      } catch (error) {
        // console.log(error.message); // error.stack more info
        setFetchError(error.message); // save error in state
      }
    }

    // invoke to populate Rovers
    (async () => await fetchRovers())(); // IIFE syntax

  }, [])

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(photosEndPoint);
        if (!response.ok) throw Error("Could not fetch resource");
        const photosList = await response.json(); // console.log(photosList); // confirm 
        console.log(photosList); // confirm 
        setPhotos(photosList);
        setFetchError(null);
      } catch (error) {
        // console.log(error.message); // error.stack more info
        setFetchError(error.message); // save error in state
      }
    }
    (async () => await fetchPhotos())();
  }, [])

  return (
    <div className="App">
      <h1>Mars Rovers Photos</h1>
      <div>
        <RoverShowcase />
      </div>
    </div>
  );
  
}

export default App;