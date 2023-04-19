export const fetchRovers = () => {
  return (dispatch) => {
    dispatch({type: "LOADING_ROVERS", loading: true});
    fetch("/api/v1/rovers")
    .then((response) => response.json())
    .then((rovers) => dispatch({type: "FETCHED_ROVERS", loading: false, payload: rovers}));
  };
};