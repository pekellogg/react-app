// export const createComment = () => {

//   return (dispatch) => {
//     dispatch({ type: "SAVING_COMMENT", message: "Saving your comment" });

//     const body = {
//       text: this.state.text,
//       rover_id: this.props.roverId,
//     }

//     fetch(`http://127.0.0.1:3000/api/v1/rovers/${this.props.roverId}/comments`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(body)
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({ type: "COMMENT_SAVED", data });
//       });
//   };

// };

// //   deleteComment: (commentId) => dispatch({ type: "DELETE_COMMENT", commentId }),