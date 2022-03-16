import React, { useState } from "react";
import AddComment from "./ConnectAddComment";
import CommentList from "./CommentList";

import { Container, Row, Col } from "reactstrap";

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
        <CommentList comments={commentsList}/>
      </Container>
    </React.Fragment>
  );
};

export default Connect;


  /* <div>
          <Nav tabs>
            <NavItem>
              <NavLink>Chat</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Trade</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Other</NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab="1">
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Form id="myForm__chat">
                    <FormGroup>
                      <Input
                        id="exampleText"
                        type="textarea"
                        placeholder="Enter Comment Here"
                      />
                      <Input
                        id="userEmail"
                        name="userEmail"
                        placeholder="Enter your email if you wish to receive response, this will not be displayed publicly"
                        type="email"
                      />
                      <Button>Post</Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Form id="myForm__trade">
                    <FormGroup>
                      <Input
                        id="exampleText"
                        type="textarea"
                        placeholder="Enter Comment Here"
                      />
                      <Input
                        id="userEmail"
                        name="userEmail"
                        placeholder="Enter your email if you wish to receive response, this will not be displayed publicly"
                        type="email"
                      />
                      <Button>Post</Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <Form id="myForm__other">
                    <FormGroup>
                      <Input
                        id="exampleText"
                        type="textarea"
                        placeholder="Enter Comment Here"
                      />
                      <Input
                        id="userEmail"
                        name="userEmail"
                        placeholder="Enter your email if you wish to receive response, this will not be displayed publicly"
                        type="email"
                      />
                      <Button>Post</Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div> */

