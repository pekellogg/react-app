function roversReducer(state = { all: [], loading: false, saveInProgress: false }, action) {
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
      // safely copy state
      const stateCopy = state.all.slice();
      // find array length for slice filtering
      const length = stateCopy.length;
      // find rover idx for slice filtering
      const idx = stateCopy.findIndex((rover) => rover.external_id === action.payload.rover_id);
      // find rover to edit comments collection
      const roverToEdit = stateCopy.find((rover) => rover.external_id === action.payload.rover_id);
      const rover = { ...roverToEdit };
      // safely add to comments
      rover.comments = [...rover.comments, action.payload];
      // first idx
      if (idx === 0) {
        const upperRovers = stateCopy.slice(idx + 1);
        return {
          ...state,
          all: [rover, ...upperRovers],
          saveInProgress: action.saveInProgress,
        }
      // last idx
      } else if (length - idx === 1) {
        const lowerRovers = stateCopy.slice(0, idx);
        return {
          ...state,
          all: [...lowerRovers, rover],
          saveInProgress: action.saveInProgress,
        }
      } else {
        const lowerRovers = stateCopy.slice(0, idx)
        const upperRovers = stateCopy.slice(idx + 1)
        return {
          ...state,
          all: [...lowerRovers, rover, ...upperRovers],
          saveInProgress: action.saveInProgress,
        }
      }
    case "EDITING_COMMENT":
      return { ...state };

    case "COMMENT_EDITED":
    // traverse smarter to account for nesting
    // const index = state.all.
    // findIndex(comment => comment.id === action.payload.id);

    //   state[index] = {
    //     ...state[index],
    //     ...action.payload,
    //   };
    //   // add relevant keys
      return { ...state };

    // add messaging keys from action
    case "DELETING_COMMENT":
      return { ...state };

    case "COMMENT_DELETED":
      // check later: this is basic logic
      // let index = state.all
      // .findIndex(({ id }) => id === action.payload.id);

      // haven't imported splice lib; use slice
      // state.splice(index, 1);

      // add relevant keys
      return { ...state };

   default:
    return state;
 }
}
export default roversReducer;