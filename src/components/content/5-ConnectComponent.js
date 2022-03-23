import React, { Component } from "react";
import { Container, Row, Col, Label, Button } from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/5-ConnectComponent.css";

function RenderComments({ commentList }) {
  return commentList.map((comment) => {
    return (
      <div key={comment.id} className="col-md-5 m-1">
        {comment.name}, {comment.message}
        <p>Posted on {comment.date}</p>
      </div>
    );
  });
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      forum: "",
      touched: {
        name: false,
        comment: false,
        forum: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.addComment(
      this.props.id,
      values.name,
      values.forum,
      values.message
    );
  }
  render() {
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
  }
}

class Connect extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
            comments={this.props.comments}
            addComment={this.props.addComment}
          />
          {/* <RenderComments comments={props.comments}/> */}
          <RenderComments commentList={this.props.comments} />
        </Container>
      </React.Fragment>
    );
  }
}

export default Connect;
