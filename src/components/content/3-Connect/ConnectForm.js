import React, { useState } from "react";
import { Label, Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";



const ConnectForm = (props) => {
  const [enteredForum, setEnteredForum] = useState("All");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const forumChangeHandler = (event) => {
    setEnteredForum(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const addCommentHandler = (values) => {
    console.log(values);

    props.addComment(" ", values.name, values.forum, values.message, "date");
  };

  return (
    <React.Fragment>
      <LocalForm onSubmit={addCommentHandler}>
        <div className="form-group">
          <Label htmlFor="forum">Forum</Label>
          <Control.select
            model=".forum"
            name="forum"
            id="forum"
            className="form-control"
            onChange={forumChangeHandler}
            value={enteredForum}
          >
            <option value="chat">Chit-Chat</option>
            <option value="events">Events</option>
            <option value="trade">Trade your Goods</option>
            <option value="other">Other</option>
          </Control.select>
        </div>
        <div className="form-group">
          <Label htmlFor="name">Name (optional)</Label>
          <Control.text
            model=".name"
            name="name"
            id="rating"
            className="form-control"
            onChange={nameChangeHandler}
            value={enteredName}
          />
        </div>
        <div className="form-group">
          <Label htmlFor="message">Comment</Label>
          <Control.textarea
            model=".message"
            name="message"
            id="message"
            className="form-control"
            rows="4"
            onChange={messageChangeHandler}
            value={enteredMessage}
          />
        </div>
        <Button type="submit" className="btn-success">
          Submit Comment
        </Button>
      </LocalForm>
    </React.Fragment>
  );
};

export default ConnectForm;
