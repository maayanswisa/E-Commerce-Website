import React from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { useState } from "react";
import { useEffect } from "react";

const NewCollections = () => {
  // State to hold the new collection items
  const [new_collection, setNew_collection] = useState([]);

  // Effect to fetch data from the API when the component mounts
  useEffect(() => {
    fetch("http://localhost:4000/newcollections")
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => setNew_collection(data)); // Update state with the fetched data
  }, []); // Empty dependency array means this effect runs only once, after the initial render

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {/* Map through the new_collection array and render an Item component for each */}
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i} // Use index as key, which is not ideal but sufficient here
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
