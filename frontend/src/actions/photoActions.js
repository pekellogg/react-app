export const fetchPhotos = () => {

  return (dispatch) => {
    dispatch({ type: "LOADING_PHOTOS" });
    fetch("http://127.0.0.1:3000/api/v1/photos")
      .then((response) => response.json())
      .then((photos) => {
        dispatch({ type: "ADD_PHOTOS", photos: photos });
      });
  };

};