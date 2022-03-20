import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/4-InformComponent.css";

function RenderInformList({ snippet }) {
  console.log(snippet)
  return (
    <Row>
      <a href={snippet.src} target="_blank" rel="noreferrer">
        <Col xs="3">
          <CardImg alt={snippet.alt} src={snippet.img} left width="10%" />
        </Col>
        <Col xs="9">
          <CardBody>
            <CardTitle tag="h5">{snippet.title}</CardTitle>
            <CardText>{snippet.caption}</CardText>
          </CardBody>
        </Col>
      </a>
    </Row>
  );
}

function Inform(props) {
  let fullInform;
  if(props.informList) {
    fullInform = props.informList.map((inform) => {
      return (
          <div key={inform.id} className="col-md-5 m-1">
            <RenderInformList snippet={inform}/>
          </div>
      );
    });
  }

  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col sm="9" xs="5">
            <p className="page-title">news in local waste reduction</p>
          </Col>
          <Col sm="3" xs="5">
            <Button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Make a Suggestion
            </Button>
          </Col>
        </Row>
        <Row>{fullInform} News articles go here </Row>
      </Container>
    </React.Fragment>
  );
}

export default Inform;
