import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Button
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/5-ConnectComponent.css";


class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
      forum: "Chit-Chat",
      touched: {
        name: false,
        comment: false,
        forum: false,
      },
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
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
              model=".comment"
              name="comment"
              id="comment"
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

function Connect(props) {

  let fullComments;
  if(props.comments) {
    fullComments = props.comments.map((comment) => {
      return (
          <div key={comment.id} className="col-md-5 m-1">
            {comment.name}, {comment.message}
          </div>
      );
    });
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {" "}
            <p className="page-title">chat with your community</p>
          </Col>
        </Row>
        <CommentForm comments={props.comments} />
        {/* <RenderComments comments={props.comments}/> */}
        {fullComments}
      </Container>
    </React.Fragment>
  );
}

export default Connect;
