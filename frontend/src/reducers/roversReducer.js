const roversReducer = (state = {
  rovers: [],
  loading: false
 },
 action) => {
 switch (action.type) {

   case "LOAD_ROVERS":
     return {
       ...state,
       rovers: [...state.rovers],
       loading: true,
     };

   case "FETCH_ROVERS":
    // console.log(action.rovers);
     return {
       ...state,
       rovers: action.rovers,
       loading: false,
     };
     
   default:
     return state;
 }
};

export default roversReducer;