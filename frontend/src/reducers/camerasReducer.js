function camerasReducer(state = { all: [], loading: false }, action) {
  switch (action.type) {
    case "LOADING_CAMERAS":
     return { 
       ...state,
       loading: action.loading,
     }
 
    case "FETCHED_CAMERAS":
     return {
       ...state,
       all: action.cameras,
       // add logic to grab camera's photos
       loading: action.loading,
     }
    // add a case to update/add photos as there are new available
    default:
     return state;
  }
 };
 
 export default camerasReducer;