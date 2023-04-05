function camerasReducer(state = { all: [], loading: false }, action) {
  switch (action.type) {
    case "LOADING_CAMERAS":
     return { 
      all: [],
      loading: action.loading,
     };
 
    case "FETCHED_CAMERAS":
     return {
       all: action.cameras,
       loading: action.loading,
     };

    default:
     return state;
  }
 };
 
 export default camerasReducer;