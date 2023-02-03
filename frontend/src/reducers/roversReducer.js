function roversReducer(state = { all: [], loading: false, saveInProgress: false, editInProgress: false, deleteInProgress: false }, action) {
 switch (action.type) {

   case "LOADING_ROVERS":
    return { 
      ...state,
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
      saveInProgress: action.saveInProgress,
    };

    case "COMMENT_SAVED":
      const all = state.all.map((rover) => {
        if (action.payload.rover_id === rover.external_id) {
          return {
            ...rover,
            comments: [...rover.comments, action.payload]
          }
        } else {
          return rover
        }
      })

      return {
        ...state, // merge new rovers collection with previous top-level keys
        all,
        saveInProgress: action.saveInProgress
      };

    case "EDITING_COMMENT":
      return {
        ...state,
        editInProgress: action.editInProgress,
      };

    case "COMMENT_EDITED":
      // {text: 'edit of spirit comment 1', id: 2, rover_id: 7}
      const editAll = state.all.map((rover) => {
        if (action.payload.rover_id === rover.external_id) {
          return {
            ...rover,
            comments: rover.comments.map((comment) => {
              if (action.payload.id === comment.id) {
                return {
                  ...action.payload,
                  text: action.payload.text,
                }
              } else {
                return comment
              }
            })
          }
        } else {
          return rover
        }
      })

      return {
        ...state, // merge new rovers collection with previous top-level keys
        all: editAll,
        editInProgress: action.editInProgress
      };

    case "DELETING_COMMENT":
      return { 
        ...state,
        deleteInProgress: action.deleteInProgress,
      };

    case "COMMENT_DELETED":
    // safely copy state
    const copiedState = state.all.slice();
    // find roversIdx for slice filtering
    const roversIndx = copiedState.findIndex((rover) => rover.external_id === action.roverId);
    // find rover to delete comment from collection
    const aRover = copiedState.find((rover) => rover.external_id === action.roverId);
    // safely copy rover
    const safeCopyOfRover = { ...aRover };
    // safely copy rover's comments
    const copiedComments = [...safeCopyOfRover.comments];
    // find comment to delete's index for slice
    const commentsIdx = copiedComments.findIndex((comment) => comment.id === action.id);
    // const commentToDelete = copiedComments.find((comment) => comment.id === action.id);

    // GROUP 1
    if (commentsIdx === 0) {
      const upperComments = copiedComments.slice(commentsIdx + 1);
      safeCopyOfRover.comments = [...upperComments] // copy all comments above
      
      // GROUP 1: A
      // first comment: WORKS
      if (roversIndx === 0) {
        const upperRovers = copiedState.slice(roversIndx + 1); // copy all rovers above
        return {
          ...state,
          all: [safeCopyOfRover, ...upperRovers],
          deleteInProgress: action.deleteInProgress,
        }
      
        // GROUP 1: B: WORKS
      } else if (copiedState.length - roversIndx === 1) {
        const roverToCopy2 = { ...aRover }
        const lowerRovers2 = copiedState.slice(0, roversIndx); // copy all rovers below
        const upperComments2 = roverToCopy2.comments.slice(commentsIdx + 1) // copy all comments above
        roverToCopy2.comments = [...upperComments2]
        return {
          ...state,
          all: [...lowerRovers2, roverToCopy2],
          deleteInProgress: action.deleteInProgress,
        }
        
        // GROUP 1: C: WORKS
      } else {
        const lowerRovers = copiedState.slice(0, roversIndx)
        const upperRovers = copiedState.slice(roversIndx + 1)
        return {
          ...state,
          all: [...lowerRovers, safeCopyOfRover, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      }
    }

    // GROUP 2
    else if (copiedComments.length - commentsIdx === 1) {
      const lowerComments = copiedComments.slice(0, commentsIdx); // copy all comments below
      const safeCopyOfRover2 = { ...aRover };
      safeCopyOfRover2.comments = [...lowerComments]
      // GROUP 2: A: WORKS
      if (roversIndx === 0) {
        const upperRovers = copiedState.slice(roversIndx + 1); // copy all rovers above
        return {
          ...state,
          all: [safeCopyOfRover2, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      // GROUP 2: B: WORKS
      } else if (copiedState.length - roversIndx === 1) {
        const safeCopyOfRover3 = {...aRover}
        const lowerRovers = copiedState.slice(0, roversIndx); // copy all rovers below
        
        safeCopyOfRover3.comments = [...lowerComments]
        return {
          ...state,
          all: [...lowerRovers, safeCopyOfRover3],
          editInProgress: action.editInProgress,
        }
      // GROUP 2: C: WORKS
      } else {
        const lowerRovers = copiedState.slice(0, roversIndx) // copy all rovers below
        const upperRovers = copiedState.slice(roversIndx + 1) // copy all rovers above
        const safeCopyOfRover4 = {...aRover}
        safeCopyOfRover4.comments = [...lowerComments]
        return {
          ...state,
          all: [...lowerRovers, safeCopyOfRover4, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      }
    }

    // GROUP 3
    else {
      const safeCopyOfRover5 = {...aRover}
      const lowerComments = copiedComments.slice(0, commentsIdx) // copy all comments below
      const upperComments = copiedComments.slice(commentsIdx + 1) // copy all comments above
      safeCopyOfRover5.comments = [...lowerComments, ...upperComments]
      // GROUP 3: A: WORKS
      if (roversIndx === 0) {
        const upperRovers = copiedState.slice(roversIndx + 1); // copy all rovers above
        return {
          ...state,
          all: [safeCopyOfRover5, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      // GROUP 3: B: WORKS
      } else if (copiedState.length - roversIndx === 1) {
        const lowerComments2 = copiedComments.slice(0, commentsIdx) // copy all comments below
        const upperComments2 = copiedComments.slice(commentsIdx + 1) // copy all comments above
        const lowerRovers = copiedState.slice(0, roversIndx); // copy all rovers below
        const safeCopyOfRover6 = {...aRover}
        safeCopyOfRover6.comments = [...lowerComments2, ...upperComments2]
        return {
          ...state,
          all: [...lowerRovers, safeCopyOfRover6],
          editInProgress: action.editInProgress,
        }
      // GROUP 3: C: WORKS
      } else {
        const lowerComments3 = copiedComments.slice(0, commentsIdx) // copy all comments below
        const upperComments3 = copiedComments.slice(commentsIdx + 1) // copy all comments above
        const lowerRovers = copiedState.slice(0, roversIndx) // copy all rovers below
        const upperRovers = copiedState.slice(roversIndx + 1) // copy all rovers above
        const safeCopyOfRover6 = {...aRover}
        safeCopyOfRover6.comments = [...lowerComments3, ...upperComments3]
        return {
          ...state,
          all: [...lowerRovers, safeCopyOfRover6, ...upperRovers],
          editInProgress: action.editInProgress,
        }
      }
    }

   default:
    return state;
 }
}
export default roversReducer;