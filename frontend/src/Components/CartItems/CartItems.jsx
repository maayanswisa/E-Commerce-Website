import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  // Use Context API to access shop context data and functions
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* Iterate over all products and display those present in the cart */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          // If the item is present in the cart
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt={e.name}
                  className="cartitem-product-icon"
                />
                <p>{e.name}</p>
                <p>₪{e.new_price.toFixed(2)}</p>{" "}
                {/* Ensure price is always formatted correctly */}
                <button
                  className="cartitems-quantity"
                  aria-label={`Quantity of ${e.name}`}
                >
                  {cartItems[e.id]}
                </button>
                <p>₪{(e.new_price * cartItems[e.id]).toFixed(2)}</p>{" "}
                {/* Ensure total price is formatted */}
                <img
                  src={remove_icon}
                  onClick={() => {
                    try {
                      removeFromCart(e.id);
                    } catch (error) {
                      console.error("Failed to remove item from cart:", error);
                    }
                  }}
                  alt="Remove item"
                  aria-label={`Remove ${e.name} from cart`}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₪{getTotalCartAmount().toFixed(2)}</p>{" "}
              {/* Ensure subtotal is formatted */}
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₪{getTotalCartAmount().toFixed(2)}</h3>{" "}
              {/* Ensure total is formatted */}
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promocode">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
