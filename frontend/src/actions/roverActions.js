

export const fetchRovers = () => {

  return (dispatch) => {
    dispatch({
      type: "LOADING_ROVERS",
      loading: true
    });

    // fetch() returns a Promise 
    // it resolves to the Response object
    fetch("http://127.0.0.1:3000/api/v1/rovers")

      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((response) => {

        // response.json() returns another Promise
        // it resolves with the result of parsing the response body text as JSON
        return response.json()
      })

      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((rovers) => {
        dispatch({
          type: "FETCHED_ROVERS",
          loading: false,
          rovers
        })
      }
    );

  };
};


export const addComment = (comment) => {

  return (dispatch) => {
    dispatch({
      type: "SAVING_COMMENT",
      saveInProgress: true
    });

    // console.log(comment);

    // fetch() returns a Promise 
    // it resolves to the Response object
    fetch(`http://127.0.0.1:3000/api/v1/rovers/${comment.rover_id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment)
    })

      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((response) => {
        // console.log(response);
        // response.json() returns another Promise
        // it resolves with the result of parsing the response body text as JSON
        return response.json()
      })

      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((data) => {
        // reminder: all attrs from server not avail here from response.json()
        // e.g. => {text: 'working with promises can be tricky', id: 16, rover_id: 5}
        dispatch({
          type: "COMMENT_SAVED",
          saveInProgress: false,
          payload: data
        });
      }
    );
  };
};

// export const editComment = (id, updatedText) => {
//   return (dispatch) => {
//     dispatch({ type: "EDITING_COMMENT", commentId });
//     fetch(`http://127.0.0.1:3000/api/v1/comments/${comment.id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(updatedText)
//     })
//       .then((response) => response)
//       .then(dispatch({ type: "COMMENT_EDITED", response }))
//   };
// };

// export const deleteComment = (commentId) => {
//   return (dispatch) => {
//     dispatch({ type: "DELETING_COMMENT", commentId });
//     fetch(`http://127.0.0.1:3000/api/v1/comments/${commentId}`, {
//       method: "DELETE",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => response)
//       .then(dispatch({ type: "COMMENT_DELETED", response }))
//   };
// };