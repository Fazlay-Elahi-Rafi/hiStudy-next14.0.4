import Image from "next/image";
import React from "react";

const ProductBody = ({ product }) => {
  return (
    <>
      <div className="row g-5 row--30 align-items-center">
        <div className="col-lg-6">
          <div className="thumbnail">
            <Image
              className="w-100 radius-10"
              src={product.img}
              width={623}
              height={747}
              alt="Product Images"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="content">
            <div className="rbt-review justify-content-start">
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <span className="rating-count">
                ({product.rating}) - 100% Positive Reviews
              </span>
            </div>

            <h2 className="title mt--10 mb--10">{product.title}</h2>
            <span className="rbt-label-style description">
              By: {product.productBy}
            </span>

            <div className="rbt-price justify-content-start mt--10">
              <span className="current-price theme-gradient">
                ${product.price}.00
              </span>
              <span className="off-price">${product.offPrice}.00</span>
            </div>

            <p className="mt--20">{product.desc}</p>

            <div className="product-action mb--20">
              {/* <div className="pro-qty">
                <input type="text" value="1" />
              </div> */}
              <div className="addto-cart-btn">
                <a className="rbt-btn btn-gradient hover-icon-reverse" href="#">
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Add To Cart</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <ul className="product-feature">
              <li>
                <span>SKU:</span> {product.sku}
              </li>
              <li>
                <span>Categories: </span> <a href="#">{product.categories}</a>
              </li>
              <li>
                <span>Tag: </span>
                {product &&
                  product.tag.map((list, i) => (
                    <a className="me-2" href="#" key={i}>
                      {list}
                    </a>
                  ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductBody;
