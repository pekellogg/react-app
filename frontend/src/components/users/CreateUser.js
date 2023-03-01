import React from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/userActions";

class CreateUser extends React.Component {

  state = {
    email: "",
    username: "",
    password_digest: ""
  };

  onChangeHandler = (event) => {
    // this.setState({ ...this.state, event: event.target.value })
  };

  submitHandler = (event) => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      username: this.state.username,
      password_digest: this.state.password_digest
    }
    this.props.createUser(user)
    this.setState({ text: "" })
  }


  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <label>Enter email</label>
        <input
          input="email"
          onChange={this.onChangeHandler}
          type="text"
          value={this.state.email}
        />

        <label>Enter username</label>
        <input
          input="username"
          onChange={this.onChangeHandler}
          type="text"
          value={this.state.username}
        />

        <label>Enter strong password</label>
        <input
          input="password_digest"
          onChange={this.onChangeHandler}
          type="text"
          value={this.state.password_digest}
        />
        <button type="submit"> Create </button>
      </form>
    );
  };

};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(createUser(user))
  };
};

export default connect(null, mapDispatchToProps)(CreateUser);