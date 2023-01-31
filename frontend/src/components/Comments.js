import React from "react";
import Comment from "./Comment";

class Comments extends React.Component {

  state = {
    text: "",
    textToEdit: "",
    showEditForm: false,
  };

  // constructor(props) {
    // super(props);
    // this.onChangeTitle = this.onChangeTitle.bind(this);
    // this.state = {
    //   text: "",
    //   textToEdit: "",
    //   showEditForm: false,
    // };
  // }

  handleOnChange = (event) => {
    if (event.target.name === "edit") {
      this.setState({ textToEdit: event.target.value })
    } else {
      this.setState({ text: event.target.value })
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    if (event.target.name === "edit") {
      this.setState({ textToEdit: event.target.value })
    } else {
      const comment = {
        text: this.state.text,
        rover_id: this.props.roverId,
      }
      this.props.addComment(comment)
      this.setState({text: ""})
    }
    // const comment = {
    //   text: this.state.text,
    //   rover_id: this.props.roverId,
    // }
    // this.props.addComment(comment)
    // this.setState({text: ""})
  };

  clickHandler = (event) => {
    console.log(event.target);
    if (event.target.name === "edit") {
      this.setState({ showEditForm: true})
      // this.props.editComment();
      
    } else {
      // this.props.deleteComment();
    }
  };

  displayComments = () => {
    if (this.props.comments.length > 0) {
      return (
        this.props.comments.map((comment) => (
          < Comment
            {...comment}
            id={comment.id}
            key={comment.id}
            clickHandler={this.clickHandler}
            handleOnEdit={this.handleOnChange}
            showEditForm={this.state.showEditForm}
            submitHandler={this.handleOnSubmit}
            textToEdit={this.state.textToEdit}
          />
        ))
      );
    } else {
      return "Be the first to add a comment!"
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleOnSubmit}>
          <input
            name="text"
            type="text"
            placeholder="Add comment"
            onChange={this.handleOnChange}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
        {this.displayComments()}
      </>
    );
  };

};

export default Comments;