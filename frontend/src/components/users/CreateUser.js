import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/userActions";
import "./CreateUser.css";

class CreateUser extends React.Component {

  state = {
    email: "",
    password_digest: "",
    username: ""
  };

  clearState = () => {
    this.setState({ email: "", username: "", password_digest: "" });
  }

  inputFieldsValid() {

  };

  onBlurHandler = (event) => {
    this.setState((prevState) => {
      if (prevState[event.target.id] === "" || " ") {
        if (event.target.id === "password_digest") {
          const errorMessage = `Password can't be blank!`;
        } else {
          const errorMessage = `${event.target.id.toUpperCase()} can't be blank!`;
        }
      }
      switch (event.target.id) {
        case "email":
          return { ...prevState }
     
        case "password_digest":
          return { ...prevState }

        case "username":
          return { ...prevState }
          
        default:
          return { ...prevState };
      }
    });
  };

  onChangeHandler = (event) => {
    this.setState((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value }
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
    if (this.inputFieldsValid()) {
      const user = {
        email: this.state.email,
        username: this.state.username,
        password_digest: this.state.password_digest
      }
      this.props.createUser(user);
      this.clearState();
    } else {
      // for each invalid field, border/outline color is red with invalid reason
    }
  };

  render() {
    return (
      <div id="CreateUser">
        <h2>Create Your Account</h2>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="email">
            <input
              className="CreateUser"
              id="email"
              // original border/outline color if valid, else border/outline color is red with invalid reason
              onBlur={this.onBlurHandler}
              onChange={this.onChangeHandler}
              // onFocus={ shift placeholder up }
              placeholder="Email"
              type="text"
              value={this.state.email}
            />
          </label>

          <label htmlFor="username">
            <input
              className="CreateUser"
              id="username"
              // onBlur={ original border/outline color if valid, else border/outline color is red with invalid reason }
              onChange={this.onChangeHandler}
              // onFocus={ shift placeholder up }
              placeholder="Username"
              type="text"
              value={this.state.username}
            />
          </label>

          <label htmlFor="password_digest">
            <input
              className="CreateUser"
              id="password_digest"
              // onBlur={ original border/outline color if valid, else border/outline color is red with invalid reason }
              onChange={this.onChangeHandler}
              // onFocus={ shift placeholder up }
              placeholder="Enter strong password"
              type="text"
              value={this.state.password_digest}
            />
          </label>
          <button id="CreateUser" type="submit"> Create </button>
        </form>
      </div>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  };
};

export default connect(null, mapDispatchToProps)(CreateUser);