import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "./commentsSlice";

export function CommentForm() {
  const [formData, setFormData] = useState({ title: "" });
  const dispatch = useDispatch();

  function handleChange(event) {
    setFormData({
      ...formData, // creating new state obj without altering previous with spread operator
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
    const comment = {
      ...formData,
    };
    dispatch(addComment(comment));
    setFormData({ title: "" });
  }

  return (
    <div>
      <h1>Add a comment!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            id="title"
            name="title"
            placeholder="Add to the conversation"
            value={formData.title}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <button type="submit" className="button">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
