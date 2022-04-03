import React from "react";
import { Container, Row, Col, Label, Button } from "reactstrap";
import Footer from './10-FooterComponent';
import { Control, LocalForm } from "react-redux-form";
import "../styles/5-ConnectComponent.css";

const RenderComments = ({ commentList }) => {
  return commentList.map((comment) => {
    return (
      <div key={comment.id} className="col-md-5 m-1">
        {comment.name}, {comment.message}
        <p>
          Posted on {comment.date} to {comment.forum}
        </p>
      </div>
    );
  });
}

const CommentForm = () => {
  return (
    <React.Fragment>
      <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
        <div className="form-group">
          <Label htmlFor="name">Name (optional)</Label>
          <Control.text
            model=".name"
            name="name"
            id="rating"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <Label htmlFor="forum">Forum</Label>
          <Control.select
            model=".forum"
            name="forum"
            id="forum"
            className="form-control"
          >
            <option value="Chit-Chat">Chit-Chat</option>
            <option value="Events">Events</option>
            <option value="Trade your Goods">Trade your Goods</option>
            <option value="Other">Other</option>
          </Control.select>
        </div>
        <div className="form-group">
          <Label htmlFor="comment">Comment</Label>
          <Control.textarea
            model=".message"
            name="message"
            id="message"
            className="form-control"
            rows="4"
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
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {" "}
            <p className="page-title">chat with your community</p>
          </Col>
        </Row>
        <CommentForm
          comments={props.comments}
          addComment={props.addComment}
        />
        {/* <RenderComments comments={props.comments}/> */}
        <RenderComments commentList={props.comments} />
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default Connect;