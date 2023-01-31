function roversReducer(state = { all: [], loading: false, saveInProgress: false, editInProgress: false }, action) {
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
      const stateCopyCommentSaved = state.all.slice();
      // find array length for slice filtering
      const lengthCommentSaved = stateCopyCommentSaved.length;
      // find rover idx for slice filtering
      const idx = stateCopyCommentSaved.findIndex((rover) => rover.external_id === action.payload.rover_id);
      // find rover to edit comments collection
      const roverToEdit = stateCopyCommentSaved.find((rover) => rover.external_id === action.payload.rover_id);
      const rover = { ...roverToEdit };
      // safely add to comments
      rover.comments = [...rover.comments, action.payload];
      // first idx
      if (idx === 0) {
        const upperRovers = stateCopyCommentSaved.slice(idx + 1);
        return {
          ...state,
          all: [rover, ...upperRovers],
          saveInProgress: action.saveInProgress,
        }
      // last idx
      } else if (lengthCommentSaved - idx === 1) {
        const lowerRovers = stateCopyCommentSaved.slice(0, idx);
        return {
          ...state,
          all: [...lowerRovers, rover],
          saveInProgress: action.saveInProgress,
        }
      } else {
        const lowerRovers = stateCopyCommentSaved.slice(0, idx)
        const upperRovers = stateCopyCommentSaved.slice(idx + 1)
        return {
          ...state,
          all: [...lowerRovers, rover, ...upperRovers],
          saveInProgress: action.saveInProgress,
        }
      }

    case "EDITING_COMMENT":
      return {
        ...state,
        all: [...state.all],
        editInProgress: action.editInProgress,
      };

    case "COMMENT_EDITED":
    // safely copy state
    const safeStateCopy = state.all.slice();
    // find array length for slice filtering
    const safeStateCopyLength = safeStateCopy.length;
    // find rover idx for slice filtering
    const roversIndex = safeStateCopy.findIndex((rover) => rover.external_id === action.payload.rover_id);
    // find rover to edit comments collection
    const roverToBeEdited = safeStateCopy.find((rover) => rover.external_id === action.payload.rover_id);
    // safely copy rover
    const safeRover = { ...roverToBeEdited };
    // safely copy rover's comments
    const safeRoverComments = [...safeRover.comments];
    const roverCommentsLength = safeRoverComments.length;
    // find comment to edit's index
    const roverCommentsIndex = safeRoverComments.findIndex((comment) => comment.id === action.payload.id);
    const commentToEdit = Object.assign({}, safeRoverComments[roverCommentsIndex])
    commentToEdit.text = action.payload.text


    // WORKS: comment[0] for all rovers
    // first idex of Rover Comments
    if (roverCommentsIndex === 0) {
      const upperComments = safeRoverComments.slice(roverCommentsIndex + 1);
      safeRover.comments = [commentToEdit, ...upperComments]
      // first index of rovers
      if (roversIndex === 0) {
        const upperRovers = safeStateCopy.slice(roversIndex + 1);
        return {
          ...state,
          all: [safeRover, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      // last index of rovers
      } else if (safeStateCopyLength - roversIndex === 1) {
        const lowerRovers = safeStateCopy.slice(0, roversIndex);
        return {
          ...state,
          all: [...lowerRovers, safeRover],
          editInProgress: action.editInProgress,
        }
      // remaining rovers
      } else {
        const lowerRovers = safeStateCopy.slice(0, roversIndex)
        const upperRovers = safeStateCopy.slice(roversIndex + 1)
        return {
          ...state,
          all: [...lowerRovers, safeRover, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      }
    }


    // WORKS: last comment for all rovers
    // last idex of Rover Comments
    else if (roverCommentsLength - roverCommentsIndex === 1) {
      const lowerComments = safeRoverComments.slice(0, roverCommentsIndex);
      const lastIndexSafeRover = {...roverToBeEdited}
      lastIndexSafeRover.comments = [...lowerComments, commentToEdit]
      // first index of rovers
      if (roversIndex === 0) {
        const upperRovers = safeStateCopy.slice(roversIndex + 1);
        return {
          ...state,
          all: [lastIndexSafeRover, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      // last index of rovers
      } else if (safeStateCopyLength - roversIndex === 1) {
        const lowerRovers = safeStateCopy.slice(0, roversIndex);
        const lastIndexSafeRover2 = {...roverToBeEdited}
        lastIndexSafeRover2.comments = [...lowerComments, commentToEdit]
        return {
          ...state,
          all: [...lowerRovers, lastIndexSafeRover2],
          editInProgress: action.editInProgress,
        }
      // remaining rovers
      } else {
        const lowerRovers = safeStateCopy.slice(0, roversIndex)
        const upperRovers = safeStateCopy.slice(roversIndex + 1)
        const lastIndexSafeRover3 = {...roverToBeEdited}
        lastIndexSafeRover3.comments = [...lowerComments, commentToEdit]
        return {
          ...state,
          all: [...lowerRovers, lastIndexSafeRover3, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      }
    }

    // remaining rover comments
    else {
      const lowerComments = safeRoverComments.slice(0, roverCommentsIndex)
      const upperComments = safeRoverComments.slice(roverCommentsIndex + 1)
      const anotherSafeRover = {...roverToBeEdited}
      anotherSafeRover.comments = [...lowerComments, commentToEdit, ...upperComments]
      // first index of rovers
      if (roversIndex === 0) {
        const upperRovers = safeStateCopy.slice(roversIndex + 1);
        return {
          ...state,
          all: [anotherSafeRover, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      // last index of rovers
      } else if (safeStateCopyLength - roversIndex === 1) {
        const lowerRovers = safeStateCopy.slice(0, roversIndex);
        const yetAnotherSafeRover = {...roverToBeEdited}
        return {
          ...state,
          all: [...lowerRovers, yetAnotherSafeRover],
          editInProgress: action.editInProgress,
        }
      // remaining rovers
      } else {
        const lowerRovers = safeStateCopy.slice(0, roversIndex)
        const upperRovers = safeStateCopy.slice(roversIndex + 1)
        const safeRoverYetAgain = {...roverToBeEdited}
        return {
          ...state,
          all: [...lowerRovers, safeRoverYetAgain, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      }
    }
    // add messaging keys from action
    // case "DELETING_COMMENT":
    //   return { ...state };

    // case "COMMENT_DELETED":
    //   return { ...state };

   default:
    return state;
 }
}
export default roversReducer;