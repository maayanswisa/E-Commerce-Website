import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  // State to hold popular products data
  const [popularProducts, setPopularProducts] = useState([]);

  // Effect to fetch popular products data from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setPopularProducts(data)); // Update state with the fetched data
  }, []); // Empty dependency array means this effect runs only once, after the initial render

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {/* Map through the popularProducts array and render an Item component for each */}
        {popularProducts.map((item) => (
          <Item
            key={item.id} // Use unique item id as key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
