import { Row, Col } from 'reactstrap';
import styles from './InformList.module.css';

function RenderInformList({ informList }) {
    return informList.map((inform) => {
      return (
        
          <Row className={styles['snippet-row']} key={inform.id}>
            <Col className={styles['card-img']}>
              <img src={inform.img}  alt={inform.alt} />
            </Col>
            <Col className={styles['snippet-body']}>
              <a href={inform.src} target="_blank" rel="noreferrer">
                <p className={styles['snippet-header']}>{inform.title}</p>
                <p className={styles["snippet-caption"]}>{inform.caption}</p>
              </a>
            </Col>
          </Row>

      );
    });
  }

  export default RenderInformList