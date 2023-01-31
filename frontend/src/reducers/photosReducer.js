function photosReducer(state = { all: [], loading: false, saveInProgress: false }, action) {
 switch (action.type) {
   case "LOADING_PHOTOS":
    return { 
      ...state,
      all: [...state.all],
      loading: action.loading,
    }

   case "FETCHED_PHOTOS":
    return {
      ...state,
      all: action.photos,
      loading: action.loading,
    }
     
   default:
    return state;
 }
};

export default photosReducer;