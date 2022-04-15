import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";
import styles from "./ProductList.module.css";

const ProductList = ({ productsList }) => {
  return productsList.map((product) => {
    return (
      <div className="product-card" key={product.id}>
        <a href={product.site} target="_blank" rel="noreferrer">
        <CardImg
    alt="alt"
    src={product.src}
    left
    width="10%"
    className={styles["product-img"]}
  />
        </a>
        <footer>
          {`${product.title} - ${product.price}`}
        </footer>

      </div>
    );
  });
};

export default ProductList;


{/* <Card key={product.id} className={styles["product-card"]}>
<a href={product.site} target="_blank" rel="noreferrer">
  <CardImg
    alt="alt"
    src={product.src}
    left
    width="10%"
    className={styles["product-img"]}
  />

  <CardBody className={styles["product-body"]}>
    <CardTitle tag="h5" className={styles["product-body-title"]}>
      {product.title}{" "}
    </CardTitle>
    <CardText className={styles["product-body-text"]}>
      {product.price}
    </CardText>
  </CardBody>
</a>
</Card> */}