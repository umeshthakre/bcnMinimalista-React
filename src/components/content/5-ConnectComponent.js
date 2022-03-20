import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Label,
  Button,
  CardBody,
  CardText,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/5-ConnectComponent.css";

function RenderComments({fullComments}) {
    return (
      <Row>
        <Col xs="9">
          <CardBody>
            <CardText>{fullComments.name}</CardText>
            <CardText>{fullComments.forum}</CardText>
            <CardText>{fullComments.message}</CardText>
          </CardBody>
        </Col>
      </Row>
    );
}

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
    // this.props.addComment(this.props.name, values.forum, values.comment)
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
    this.props.resetFeedbackForm();
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
          <Button type="submit" color="primary">
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
    fullComments = props.comments.comments.map((comment) => {
      return (
          <div key={comment.id} className="col-md-5 m-1">
            <RenderComments comments={props.comments}/>
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
        <CommentForm comments={this.props.comments} />
        <RenderComments comments={props.comments}/>
      </Container>
    </React.Fragment>
  );
}

export default Connect;

// const AddComment = (props) => {
//   return (
//     <LocalForm onSubmit={(values) => props.handleSubmit(values)}>

//     </LocalForm>
//   );
// };

// const CommentList = (props) => {
//   return <div>comments list here </div>;
// };
