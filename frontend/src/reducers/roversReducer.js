

function roversReducer(
  state = {
    all: [],
    loading: false,
    saveInProgress: false
  },
  action
)

{
 switch (action.type) {

   case "LOADING_ROVERS":
    return { 
      ...state,
      all: [...state.all],
      loading: action.loading,
    };

   case "FETCHED_ROVERS":
    return {
      ...state,
      all: action.rovers,
      loading: action.loading,
    };

    case "SAVING_COMMENT":
      return {
      ...state,
      all: [...state.all],
      saveInProgress: action.saveInProgress,
    };
     
    case "COMMENT_SAVED":
      // find rover to edit comments collection
      const roverToEdit = state.all.find((rover) => rover.external_id === action.payload.rover_id)
      // make copy of rover
      const rover = { ...roverToEdit }
      // safely add to comments
      rover.comments = [...rover.comments, action.payload]
      // use the idx of rover with comments to update to copy remaining rovers
      let idx = state.all.findIndex((rover) => rover.external_id === action.payload.rover_id);
      let untouchedRovers = state.all.slice(idx + 1)

      // console.log([...untouchedRovers, rover])
      return {
      ...state,
      all: [rover, ...untouchedRovers],
      saveInProgress: action.saveInProgress,
    };

    // case "EDITING_COMMENT":
    //   // add messaging keys from action
    //   return {
    //   ...state,
    // };


    // example: https://www.bezkoder.com/react-redux-crud-example/
    // return tutorials.map((tutorial) => {
    //   if (tutorial.id === payload.id) {
    //     return {
    //       ...tutorial,
    //       ...payload,
    //     };
    //   } else {
    //     return tutorial;
    //   }
    // });
    // case "COMMENT_EDITED":
    //   // traverse smarter to account for nesting
    //   // const index = state.all.
    //   // findIndex(comment => comment.id === action.payload.id);

    //   state[index] = {
    //     ...state[index],
    //     ...action.payload,
    //   };
    //   // add relevant keys
    //   return {
    //   ...state,
    // };

    // add messaging keys from action
    // case "DELETING_COMMENT":
    //   return {
    //   ...state,
    // };


    // example: https://www.bezkoder.com/react-redux-crud-example/
    // return tutorials.filter(({ id }) => id !== payload.id);
    // case "COMMENT_DELETED":
    //   // check later: this is basic logic
    //   // let index = state.all
    //   // .findIndex(({ id }) => id === action.payload.id);

    //   // haven't imported splice lib; use slice
    //   // state.splice(index, 1);

    //   // add relevant keys
    //   return {
    //   ...state,
    // };

   default:
    return state;
 }
};

export default roversReducer;