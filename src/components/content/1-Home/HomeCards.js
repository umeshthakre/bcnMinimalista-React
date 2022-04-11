import { Loading } from "../../ui/Loading";
import { Fade, Stagger } from "react-animation-components";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "reactstrap";
import styles from "./HomeCards.module.css";

const RenderHomeCards = ({ cardList, isLoading, errMess }) => {
  if (isLoading) {
    return (
      <Container>
        <Row>
          <Loading />
        </Row>
      </Container>
    );
  }
  if (errMess) {
    return (
      <Container>
        <Row>{errMess}</Row>
      </Container>
    );
  }
  return (
    <Stagger in>
      {cardList.map((card) => {
        return (
          <Fade in key={card.id}>
            <div className="">
              <NavLink to={card.link}>
                <Row>
                  <Col className={styles["carousel-inner"]}>
                    <img
                      src={card.src}
                      alt=""
                      className={styles["img-fluid"]}
                    ></img>
                    <div
                      className={`${styles["carousel-caption"]}  ${styles['background-text']}`}
                    >
                      <p className={styles["carousel-caption-p"]}>{card.name}</p>
                    </div>
                  </Col>
                </Row>
              </NavLink>
            </div>
          </Fade>
        );
      })}
    </Stagger>
  );
};

export default RenderHomeCards;
