import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../ui/Footer";
import ConnectComments from "./ConnectComments";
import ConnectForm from "./ConnectForm";
import ForumOptions from "./ConnectForum";

const Connect = ({ comments, addComment }) => {
  const allForum = [
    "all",
    ...new Set(comments.map((comment) => comment.forum)),
  ];
  console.log(allForum);

  const [comment, setComment] = useState(comments);
  const [forum, setForum] = useState(allForum);
  const [currentForum, setCurrentForum] = useState("all");

  const filterItems = (forum) => {
    if (forum === "all") {
      setComment(comments);
      return;
    }
    const filteredComments = comments.filter(
      (comment) => comment.forum === forum
    );
    setComment(filteredComments);
    setCurrentForum(forum);
  };

  const updateCommentView = () => {
    console.log(comments)
    console.log(currentForum)
    const filteredComments = comments.filter(
      (comment) => comment.forum === currentForum
    );
    setComment(filteredComments);
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
          currentForum={currentForum}
          updateCommentView={updateCommentView}
        />
        {/* <RenderComments comments={props.comments}/> */}
        <ConnectComments comments={comment} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Connect;
