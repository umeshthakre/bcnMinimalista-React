import React, { useState } from "react";
import { Container, Row, Col, Label, Button } from "reactstrap";
import Footer from "./10-FooterComponent";
import { Control, LocalForm } from "react-redux-form";
import "../styles/5-ConnectComponent.css";
// export const COMMENTS = [
//   {
//     id: 0,
//     name: "Patrick",
//     forum: "Chit-Chat",
//     message: "test chit chat message",
//     date: "June 5th, 1990",
//   },
//   {
//     id: 1,
//     name: "Patrick",
//     forum: "Chit-Chat",
//     message: "test chit chat message 2",
//     date: "June 5th, 2022",
//   },
// ];

const RenderComments = ({ comments }) => {
  return comments.map((comment) => {
    return (
      <div key={comment.id} className="col-md-5 m-1">
        {comment.name}, {comment.message}
        <p>
          Posted on {comment.date} to {comment.forum}
        </p>
      </div>
    );
  });
};

const CommentForm = (props) => {
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

  const addCommentHandler = event => {
    event.preventDefault();
    props.onAddComment(enteredForum, enteredName, enteredMessage)
    setEnteredForum("All")
    setEnteredName("")
    setEnteredMessage("")
  }


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
            <option value="All">All</option>
            <option value="Chit-Chat">Chit-Chat</option>
            <option value="Events">Events</option>
            <option value="Trade your Goods">Trade your Goods</option>
            <option value="Other">Other</option>
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

const Connect = (props) => {
  const [comments, setNewComment] = useState([]);

  const addCommentHandler = (uForum, uName, uMessage) => {
    setNewComment((prevCommentList) => {
      return [
        ...prevCommentList,
        { forum: uForum, name: uName, message: uMessage },
      ];
    });
  };
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {" "}
            <p className="page-title">chat with your community</p>
          </Col>
        </Row>
        <CommentForm onAddComment={addCommentHandler} />
        {/* <RenderComments comments={props.comments}/> */}
        <RenderComments comments={comments} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Connect;
