import React, { useState } from "react";
import { Label, Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";

const ConnectForm = (props) => {


  return (
    <React.Fragment>
      <LocalForm
        onSubmit={props.addCommentHandler}
        onChange={props.forumChangeHandler}
      >
        <div className="form-group">
          <Label htmlFor="name">Name (optional)</Label>
          <Control.text
            model=".name"
            name="name"
            id="rating"
            className="form-control"
            onChange={props.nameChangeHandler}
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
            onChange={props.messageChangeHandler}
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
