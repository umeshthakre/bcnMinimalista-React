import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Footer from "../../ui/Footer";
import ConnectComments from './ConnectComments';
import ConnectForm from './ConnectForm';



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
        <ConnectForm comments={props.comments} addComment={props.addComment}/>
        {/* <RenderComments comments={props.comments}/> */}
        <ConnectComments comments={props.comments} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Connect;
