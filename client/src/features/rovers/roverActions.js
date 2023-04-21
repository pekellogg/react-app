export const fetchRovers = (signal = {}) => {
  return (dispatch) => {
    const controller = new AbortController();
    const {signal} = controller;
    dispatch({type: "LOADING_ROVERS", loading: true});
    fetch("/api/v1/rovers", {signal})
      .then((response) => response.json())
      .then((rovers) => dispatch({type: "FETCHED_ROVERS", loading: false, payload: rovers}))
      .finally(() => controller.abort());
  };
};