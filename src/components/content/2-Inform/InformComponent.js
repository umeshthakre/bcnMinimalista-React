import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Footer from "../../ui/Footer";
import RenderInformList from "./InformList";
import InformModal from "./InformModal";

const Inform = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col>
            <p className="page-title">news in local waste reduction</p>
          </Col>

          <Button
            className="modal-button"
            color="success"
            outline
            id="suggestButton"
            // onClick={this.toggleModal}
          >
            Suggest article
          </Button>
        </Row>
        <RenderInformList informList={props.informList} />
        <Footer />
      </Container>

      {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> */}
      <InformModal />
    </React.Fragment>
  );
};

export default Inform;
