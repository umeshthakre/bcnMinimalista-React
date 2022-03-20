import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "reactstrap";
import "../styles/5-ConnectComponent.css";

const Connect = () => {
  const [commentsList, setCommentsList] = useState([]);

  const addCommentHandler = (uEmail, uComment) => {
    setCommentsList((prevCommentsList) => {
      return [
        ...prevCommentsList,
        { name: uEmail, age: uComment, id: Math.random().toString() },
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
        <AddComment onAddComment={addCommentHandler} />
        <CommentList comments={commentsList} />
      </Container>
    </React.Fragment>
  );
};

export default Connect;

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

const CommentList = (props) => {
  return (
    <div>
      <ul>
        {props.comments.map((comment) => (
          <p key={comment.id}>
            {comment.email} - {comment.comment}
          </p>
        ))}
      </ul>
    </div>
  );
};
