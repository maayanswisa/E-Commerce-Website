import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const ShopContext = createContext(null);
/*
Context
מספק דרך להעביר נתונים (כמו ערכים והגדרות) דרך עץ הרכיבים
מבלי הצורך להעביר פרופס באופן ידני דרך כל רמה של העץ
שימושי במיוחד כאשר יש לך נתונים שהם "גלובליים" לאפליקציה שלך
*/

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
/* 
פונקציה זו יוצרת אובייקט עם אינדקסים ערכים של 0. 
זה משמש כברירת מחדל לסל הקניות, כך שכל פריט מתחיל עם כמות של 0.
*/

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]); // State to store all products
  const [cartItems, setCartItems] = useState(getDefaultCart()); // State to store cart items

  useEffect(() => {
    fetch("http://localhost:4000/allproducts") // Fetch all products from the server
      .then((response) => response.json())
      .then((data) => setAll_product(data));

    // Fetch cart items if there is an auth-token in localStorage
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);
  /*
רכיב שמספק את הקונטקסט לכל רכיב בתוכו.
 הוא מנהל את מצב הסל ומוצרים בעזרת 
 useState
  ומבצע בקשות 
  API 
  כדי לטעון את הנתונים הדרושים עם 
  useEffect.
*/

  const addToCart = (itemId) => {
    // Add an item to the cart and update the server
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error)); // Catch fetch errors;
    }
  };

  const removeFromCart = (itemId) => {
    // Remove an item from the cart and update the server
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem("auth-token")}`,
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  /*
   פונקציות להוספת או הסרת פריטים מהסל.
    הן גם שולחות בקשות 
    API 
    כדי לעדכן את הסל בצד השרת.
   */

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Find the product by ID
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );

        // Check if itemInfo exists and has a new_price property
        if (itemInfo && itemInfo.new_price) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }; //מחשבת את הסכום הכולל של כל הפריטים בסל

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }; //מחשבת את מספר הפריטים הכולל בסל

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  }; // אובייקט המכיל את כל הפונקציות והערכים שנרצה לספק לרכיבים בתוכה

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
/*
מספק את הערכים שנכתבו ב-
contextValue 
לכל הרכיבים שבתוך 
ShopContextProvider.
 */

export default ShopContextProvider;

/*
Provider-ה
React-ב
Contecxt API הוא חלק מ
שמאפשר להעביר נתונים לרכיבים אחרים בעץ הרכיבים 
מבלי הצורך להעביר אותם דרך פרופס באופן ידני בכל רמה
*/

/*
createContext
מחזיר אובייקט שמכיל שני חלקים
Provider וה-Consumer
*/
