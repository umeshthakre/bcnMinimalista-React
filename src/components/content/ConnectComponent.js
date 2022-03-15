import React from "react";
import {
  Button,
  NavLink,
  NavItem,
  Nav,
  TabContent,
  TabPane,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const Connect = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            {" "}
            <p className="page-title">chat with your community</p>
          </Col>
        </Row>

        <div>
          <Nav tabs>
            <NavItem>
              <NavLink className="active" onClick={function noRefCheck() {}}>
                Chat
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="" onClick={function noRefCheck() {}}>
                Trade
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="" onClick={function noRefCheck() {}}>
                Other
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab="1">
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <Form id="myForm__connect">
                    <FormGroup>
                      <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="with a placeholder"
                        type="email"
                      />
                      <Input id="exampleText" name="text" type="textarea" />
                      <Button>Post</Button>
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <h4>Tab 2 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <h4>Tab 3 Contents</h4>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Connect;
