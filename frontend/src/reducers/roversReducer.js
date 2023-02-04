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
      const allForEdit = state.all.map((rover) => {
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
        all: allForEdit,
        editInProgress: action.editInProgress
      };

    case "DELETING_COMMENT":
      return { 
        ...state,
        deleteInProgress: action.deleteInProgress,
      };
      
    case "COMMENT_DELETED":
      const allForDelete = state.all.map((rover) => {
        if (action.roverId === rover.external_id) {
          return {
            ...rover,
            comments: rover.comments.filter((comment) => action.id !== comment.id)
          }
        } else {
          return rover
        }
      })

      return {
        ...state, // merge new rovers collection with previous top-level keys
        all: allForDelete,
        deleteInProgress: action.deleteInProgress,
      };

   default:
    return state;
 }
}
export default roversReducer;