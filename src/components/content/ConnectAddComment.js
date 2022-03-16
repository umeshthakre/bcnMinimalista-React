import React, { useState } from "react";
import { Button, Card } from 'reactstrap';

const AddComment = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredComment, setEnteredComment] = useState("");

  const addCommentHandler = (event) => {
    event.preventDefault();
    props.onAddComment(enteredEmail, enteredComment);
    setEnteredEmail(" ");
    setEnteredComment(" ");
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };
  return (
    <div>
      <Card>
        <form onSubmit={addCommentHandler}>
          <label htmlFor="email">Email</label>
          <input
            is="email"
            type="text"
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
          <label htmlFor="comment">Comment</label>
          <input
            is="email"
            type="text"
            onChange={commentChangeHandler}
            value={enteredComment}
          />
          <Button type="submit">Comment</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddComment;
