import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, col }) => {
  return (
    <div className={`col-sm-12 col-md-12 col-lg-${col} my-3 shadow mr-1`}>
      <div className="card p-3 rounded">
        <h4
          className={
            product.category === 'Kids'
              ? 'bg-primary text-center shadow rounded p-2'
              : product.category === 'Teens'
              ? 'bg-success text-center shadow rounded p-2'
              : 'bg-warning text-center shadow rounded p-2'
          }
        >
          {product.category}
        </h4>
        <img
          className="img-fluid mx-auto"
          src={product.images[0].url}
          style={{ width: '350px', height: '300px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to={`/product/${product._id}`}>{product.name}</Link>
          </h5>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{ width: `${(product.ratings / 5) * 100}%` }}
              ></div>
            </div>
            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div>
          <p className="card-text">${product.price}</p>
          <Link
            to={`/product/${product._id}`}
            id=""
            className="btn btn-block btn-danger"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
