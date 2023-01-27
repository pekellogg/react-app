// import { v4 as uuidv4 } from 'uuid';

const manageComments = (state = {
  comments: [],
  loading: false
 },
 action) => {
 switch (action.type) {

   case "LOADING_COMMENTS":
     return {
       ...state,
       comments: [...state.comments],
       loading: true,
     };

   case "ADD_COMMENTS":
     return {
       ...state,
       comments: action.comments,
       loading: false,
     };

    case "POSTING_COMMENT":
      const comment = {
        // id: uuidv4(),
        comment: action.comment
      };
    //   return {
    //     ...state,
    //     comments: [...state.comments, comment],
    //     loading: false,
    //   };
     
    // case "DELETE_COMMENT":
    //   return {
    //     comments: state.comments.filter((comment) => comment.id !== action.id)
    //   };

   default:
     return state;
 }
};

export default manageComments;