export const fetchRovers = () => {
  
  return (dispatch) => {
    dispatch({ type: "LOADING_ROVERS", loading: true });
    
    fetch("http://127.0.0.1:3000/api/v1/rovers")
      .then((response) => response.json())
      .then((rovers) => dispatch({ type: "FETCHED_ROVERS", loading: false, rovers }));
  };

};