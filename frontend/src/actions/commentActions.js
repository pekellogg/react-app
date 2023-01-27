export const fetchComments = () => {

  return (dispatch) => {
    dispatch({ type: "LOADING_COMMENTS" });
    fetch("http://127.0.0.1:3000/api/v1/comments")
      .then((response) => {
        return response.json();
      })
      .then((comments) => {
        dispatch({ type: "ADD_COMMENTS", comments: comments });
      });
  };

};

// export const createComment = () => {

//   return (dispatch) => {
//     dispatch({ type: "POSTING_COMMENT" });
//     fetch("http://127.0.0.1:3000/api/v1/comments", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify()
//     })
//       .then((response) => response.json())
//       .then((comments) => {
//         dispatch({ type: "COMMENT_CREATED_SUCCESSFULLY", comments: comments });
//       });
//   };

// };