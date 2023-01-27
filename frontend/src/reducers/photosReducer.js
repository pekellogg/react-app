const photosReducer = (state = {
  photos: [],
  loading: false
 },
 action) => {
 switch (action.type) {

   case "LOAD_PHOTOS":
     return {
       ...state,
       photos: [...state.photos],
       loading: true,
     };

   case "FETCH_PHOTOS":
     return {
       ...state,
       photos: action.photos,
       loading: false,
     };
     
   default:
     return state;
 }
};

export default photosReducer;