export const fetchUsers = () => {
  return (dispatch) => {
    dispatch({
      type: "LOADING_USERS",
      loading: true
    });
    // fetch() returns a Promise 
    // it resolves to the Response object
    fetch("http://127.0.0.1:3000/api/v1/users")
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((response) => {
        // response.json() returns another Promise
        // it resolves with the result of parsing the response body text as JSON
        return response.json()
      })
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((users) => {
        dispatch({
          type: "FETCHED_USERS",
          loading: false,
          users
        })
      }
    );

  };
};

export const loginUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: "LOGGING_IN_USER",
      logged_in: "in progress"
    });
    fetch("http://127.0.0.1:3000/api/v1/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({email, password})
    })
      .then((response) => {
        return response.json()
      })
      .then((user) => {
        dispatch({
          type: "FETCHED_USERS",
          logged_in: true,
          user
        })
      }
    );
  };
};

export const createUser = (user) => {
  console.log(user);
  return (dispatch) => {
    dispatch({
      type: "SAVING_USER",
      saveInProgress: true
    });
    console.log(JSON.stringify(user));
    // fetch() returns a Promise 
    // it resolves to the Response object
    fetch(`http://127.0.0.1:3000/api/v1/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((response) => {
        // response.json() returns another Promise
        // it resolves with the result of parsing the response body text as JSON
        return response.json()
      })
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((data) => {
        // reminder: all attrs from server not avail here from response.json()
        dispatch({
          type: "USER_SAVED",
          saveInProgress: false,
          payload: data
        });
      }
    );
  };
};


export const editUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "EDITING_USER",
      editInProgress: true
    });
    // fetch() returns a Promise 
    // it resolves to the Response object
    fetch(`http://127.0.0.1:3000/api/v1/users/${user.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((response) => {
        // response.json() returns another Promise
        // it resolves with the result of parsing the response body text as JSON
        return response.json()
      })
      .then((data) => {
        // reminder: all attrs from server not avail here from response.json()
        dispatch({
          type: "USER_EDITED",
          editInProgress: false,
          payload: data
        })
      }
    );
  };
};

export const deleteUser = (userId) => {
  return (dispatch) => {
    dispatch({
      type: "DELETING_USER",
      deleteInProgress: true,
    });
    // fetch() returns a Promise 
    // it resolves to the Response object
    fetch(`http://127.0.0.1:3000/api/v1/users/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      // Promise.then() returns another Promise
      // it takes 2 args: fulfilled callback, rejected callback
      .then((response) => {
        dispatch({
          type: "USER_DELETED",
          id: userId
        })
        return response.status
      })
  };
};