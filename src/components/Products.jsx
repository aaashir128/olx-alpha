import React from "react";
import { Button, Card } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";
import Footer from "./Footer";
import "./Products.css";

function Products({ id, image, price, title, location, timestamp }) {

  

  return (
    <div className="products">
      <div className="products__container">
        <img src={image} alt="olx" />
        
        <div className='product__price'>
        <CurrencyFormat value={price} displayType={'text'} fontWeight={'bold'} thousandSeparator={true} prefix={'Rs '} />

          <p className="title">{title}</p>
        </div>

        <div className="products__bottom">
          <p className="products__location">{location}</p>
          <p className="products__timestamp">{timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
