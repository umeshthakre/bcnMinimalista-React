import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import styles from './WasteList.module.css';

const WasteList = ({ wasteList }) => {
  return wasteList.map((waste) => {
    return (
      <div key={waste.id}>
        <Card>
          <a href={waste.site} target="_blank" rel="noreferrer">
            <CardBody>
              <CardTitle tag="h5">{waste.title}</CardTitle>
              <CardText>{waste.subtitle}</CardText>
            </CardBody>
          </a>
        </Card>
      </div>
    );
  });
};

export default WasteList;
