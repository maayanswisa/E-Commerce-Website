import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/Frontend_Assets/star_icon.png";
import star_dull_icon from "../Assets/Frontend_Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  // Destructure product from props
  const { product } = props;

  // Get addToCart function from ShopContext
  const { addToCart } = useContext(ShopContext);

  // Return null if no product is provided
  if (!product) {
    return null; // Optionally, you could display a message here
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        {/* Left section of the product display */}
        <div className="productdisplay-img-list">
          {/* Thumbnail images */}
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          {/* Main product image */}
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          {/* Displaying product ratings */}
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          {/* Displaying product prices */}
          <div className="productdisplay-right-price-old">
            ₪{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ₪{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {/* Short product description */}Beautiful piece of clothing
        </div>

        <div>
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            {/* Size options */}
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            // Add product to cart when button is clicked
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          {/* Display product category */}
          <span>Category :</span>Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          {/* Display product tags */}
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
