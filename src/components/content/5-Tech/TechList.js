import {Row, Col} from 'reactstrap';
import styles from './TechList.module.css';

const TechList = ({ techTools }) => {
    return techTools.map((tools) => {
      return (
        <Row key={tools.id} className={styles['flex-row']}>
          <Col className={styles['flex-column']}>
            <a href={tools.src} target="_blank" rel="noreferrer">
              <p className={styles['flex-text']}>{tools.name}</p>
            </a>
          </Col>
        </Row>
      );
    });
  };

  export default TechList