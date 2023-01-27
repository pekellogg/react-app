export const fetchRovers = () => {
  
  return (dispatch) => {
    console.log(dispatch);
    dispatch({ type: "LOADING_ROVERS" });
    
    fetch("http://127.0.0.1:3000/api/v1/rovers")
      .then((response) => {
        return response.json();
      })
      .then((rovers) => {
        dispatch({ type: "FETCH_ROVERS", rovers: rovers });
      });

  };

};