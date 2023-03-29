function camerasReducer(state = { all: [], loading: false, saveInProgress: false }, action) {
  switch (action.type) {
    case "LOADING_CAMERAS":
     return { 
       ...state,
       all: [...state.all],
       loading: action.loading,
     }
 
    case "FETCHED_CAMERAS":
     return {
       ...state,
       all: action.cameras,
       loading: action.loading,
     }
      
    default:
     return state;
  }
 };
 
 export default camerasReducer;