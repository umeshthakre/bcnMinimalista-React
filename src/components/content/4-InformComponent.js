import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm } from "react-redux-form";
import "../styles/4-InformComponent.css";
import Footer from './10-FooterComponent';

function RenderInformList({ informList }) {
  return informList.map((inform) => {
    return (
      <div key={inform.id} className="">
        <Row className="">
          <Col>
            <img src={inform.img} className="img-fluid" alt={inform.alt} />
          </Col>
          <Col className="snippet">
            <a href={inform.src} target="_blank" rel="noreferrer">
              <p className="">{inform.title}</p>
              <p className="">{inform.caption}</p>
            </a>
          </Col>
        </Row>
      </div>
    );
  });
}

const Inform = (props) => {

    // this.toggleModal = this.toggleModal.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  
// const [modalState, setModalState] = useState(isModalOpen)
  
// toggleModal() {
//     this.setState({
//       isModalOpen: !this.state.isModalOpen,
//     });
//   }

  // handleSubmit(values) {
  //   this.toggleModal();
  //   alert("suggestion submitted: " + JSON.stringify(values));
  // }


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
          <RenderInformList
            informList={props.informList}
          />
          <Footer/>
        </Container>
        {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}> */}
        <Modal>
          <ModalHeader>share your thoughts</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="name">name</Label>
                <Control.text
                  model=".name"
                  name="name"
                  id="name"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <Label htmlFor="comment">thought</Label>
                <Control.text
                  model=".comment"
                  name="comment"
                  id="comment"
                  className="form-control"
                />
              </div>
              <Button type="submit">submit</Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
}

export default Inform;
