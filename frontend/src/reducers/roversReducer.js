function roversReducer(state = { all: [], loading: false }, action) {
 switch (action.type) {
   case "LOADING_ROVERS":
    return { 
      all: [],
      loading: action.loading,
    };

   case "FETCHED_ROVERS":
    return {
      all: action.rovers,
      loading: action.loading,
    };

   default:
    return state;
 }
}
export default roversReducer;