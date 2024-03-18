import React from 'react';
import sampleImage from '../logo192.png';

const ProductRow = ({ onPurchase, image, item, name, description, price }) => {
    
    return (
      <div className="row product">
        <div className="col-md-2">
          <img src={image || sampleImage} alt={name} height="100" width="100px" />
        </div>
        <div className="col-md-8 product-detail">
          <h4>{name}</h4>
          <div dangerouslySetInnerHTML={{__html: description}}></div>
        </div>
        <div className="col-md-2 product-price">
          {price}
        </div>
        <button onCLick={(e)=> {}}>Product details</button>
        <button onClick={(e)=> {onPurchase(item)}}>Purchase</button>
      </div>
    );
  }

export default ProductRow;