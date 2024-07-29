import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);
/*
 רכיב הקונטקסט שלך עוטף את רכיב היישום 
  ומספק לו את הסטור הקונטקסט 
  זה מאפשר לכל רכיבי היישום לגשת לנתונים ולפונקציות שברשות הקונטקסט
 */
