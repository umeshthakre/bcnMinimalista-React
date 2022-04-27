import React from "react";
import Footer from "../ui/Footer";
import "../../styles/components/ReduceComponent.css";


const Reduce = (props) => {
  return (
    <React.Fragment>
      <div className="reduce-container">
        <div className="reduce__title-btn">
          <p className="reduce__title">minimize carbon output and waste</p>
          <div className="reduce__btn">
            <button
              className="modal-button"
              color="success"
              outline
              id="suggestButton"
            >
              Suggest any additions to this page!
            </button>
          </div>
        </div>
        <div className="reduce__products-container">
          <div className="reduce__products-title">
            <h3>Goods the encourage longevity</h3>
          </div>
          <div className="reduce__products-list-container">
            {props.products.map((product) => {
              return (
                <div className="reduce__product-card" key={product.id}>
                  <a href={product.site} target="_blank" rel="noreferrer">
                    <img
                      alt="alt"
                      src={product.src}
                      left
                      width="10%"
                      className="reduce__product-img"
                    />
                  </a>
                  <footer className="reduce__product-text">{`${product.title} - ${product.price}`}</footer>
                </div>
              );
            })}
          </div>
        </div>
        <div className="reduce__waste-container">
          <div className="reduce__waste-title">
            <h3>Waste and Recycling Services</h3>
          </div>
          <div className="reduce__waste-list-container">
            {props.waste.map((waste) => {
              return (
                <div className="reduce__waste-card" key={waste.id}>
                  <a href={waste.site} target="_blank" rel="noreferrer">
                    <div className="reduce-waste-card-body">
                      <div className="reduce__waste-card-header">
                        {waste.title}
                      </div>
                      <div className="reduce_waste-card-body">
                        {waste.subtitle}
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="reduce__tips-container">
          <div className="reduce__tips-title">
            <h3>Tips and Tricks</h3>
          </div>
          <div className="reduce__tips-list-container">
            {props.tips.map((tip) => {
              return (
                <div className="reduce__tips-card" key={tip.id}>
                  <div className="reduce__tips-cardtext">{tip.title}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Reduce;
