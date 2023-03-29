export const fetchCameras = () => {

  return (dispatch) => {

    dispatch({ type: "LOADING_CAMERAS", loading: true });

    fetch("http://127.0.0.1:3000/api/v1/cameras")
      .then((response) => response.json())
      .then((cameras) => dispatch({ type: "FETCHED_CAMERAS", loading: false, cameras }))
  };

};