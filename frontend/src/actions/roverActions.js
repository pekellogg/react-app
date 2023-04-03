export const fetchRovers = () => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_ROVERS",
      loading: true
    });
    // fetch() returns a Promise 
    // it resolves to the Response object
    fetch("http://127.0.0.1:3000/api/v1/rovers")
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((response) => {
        // response.json() returns another Promise
        // it resolves with the result of parsing the response body text as JSON
        return response.json()
      })
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((rovers) => {
        dispatch({
          type: "FETCHED_ROVERS",
          loading: false,
          rovers
        })
      }
    );

  };
};