function usersReducer(state = { all: [], loading: false, saveInProgress: false, editInProgress: false, deleteInProgress: false }, action) {
  switch (action.type) {
 
    case "LOADING_USERS":
     return { 
       ...state,
       loading: action.loading,
     };
 
    case "FETCHED_USERS":
     return {
       ...state,
       all: action.users,
       loading: action.loading,
     };
 
     case "SAVING_USER":
       return {
       ...state,
       saveInProgress: action.saveInProgress,
     };
 
     case "USER_SAVED":
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
         ...state, // merge new users collection with previous top-level keys
         all,
         saveInProgress: action.saveInProgress
       };
 
     case "EDITING_USER":
       return {
         ...state,
         editInProgress: action.editInProgress,
       };
 
     case "USER_EDITED":
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
         ...state, // merge new users collection with previous top-level keys
         all: allForEdit,
         editInProgress: action.editInProgress
       };
 
     case "DELETING_USER":
       return { 
         ...state,
         deleteInProgress: action.deleteInProgress,
       };
       
     case "USER_DELETED":
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
         ...state, // merge new users collection with previous top-level keys
         all: allForDelete,
         deleteInProgress: action.deleteInProgress,
       };
 
    default:
     return state;
  }
 }
 export default usersReducer;