import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../ui/Footer";
import ConnectComments from "./ConnectComments";
import ConnectForm from "./ConnectForm";
import ForumOptions from "./ConnectForum";

const Connect = (props) => {

  const { comments, addComment } = props;
  const [commentsList, setCommentsList] = useState(commentsList)
  const [forum, setForum] = useState(allForum);
  const [enteredForum, setEnteredForum] = useState("All");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");


  //forum filtration
  const allForum = [
    "all",
    ...new Set(comments.map((comment) => comment.forum)),
  ];
  console.log(allForum);

  const filterItems = (forum) => {
    if (forum === "all") {
      setCommentsList(commentsList);
      setForum("all")
      return;
    }
    const filteredComments = comments.filter(
      (comment) => comment.forum === forum
    );
    setCommentsList(filteredComments);
  };

  //form state

  const forumChangeHandler = (event) => {
    setEnteredForum(enteredForum);
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
      <Container>
        <Row>
          <Col>
            {" "}
            <p className="page-title">chat with your community</p>
          </Col>
        </Row>
        <ForumOptions forum={forum} filterItems={filterItems} />
        <ConnectForm
          comments={comments}
          addComment={addComment}
          forumChangeHandler={forumChangeHandler}
          nameChangehandler={nameChangeHandler}
          messageChangeHandler={messageChangeHandler}
          addCommentHandler={addCommentHandler}
        />
        {/* <RenderComments comments={props.comments}/> */}
        <ConnectComments comments={comments} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Connect;
