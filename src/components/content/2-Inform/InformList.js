import { style } from '@mui/system';
import { Row, Col } from 'reactstrap';
import styles from './InformList.module.css';

function RenderInformList({ informList }) {
    return informList.map((inform) => {
      return (
        <div key={inform.id} className={styles.snippet}>
          <Row className={styles['snippet-row']}>
            <Col>
              <img src={inform.img} className={styles['card-img']} alt={inform.alt} />
            </Col>
            <Col className={styles['snippet-body']}>
              <a href={inform.src} target="_blank" rel="noreferrer">
                <p className={styles['snippet-header']}>{inform.title}</p>
                <p className="">{inform.caption}</p>
              </a>
            </Col>
          </Row>
        </div>
      );
    });
  }

  export default RenderInformList