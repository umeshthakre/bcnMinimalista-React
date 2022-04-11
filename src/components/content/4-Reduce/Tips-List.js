import { Card, CardBody, CardTitle } from "reactstrap";
import styles from './Tips-List.module.css';

const TipsList = ({ tips }) => {
  return tips.map((tip) => {
    return (
      <div key={tip.id}>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{tip.title}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  });
};

export default TipsList
