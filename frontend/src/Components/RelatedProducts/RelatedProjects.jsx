import React from "react";
import "./RelatedProjects.css";
import data_product from "../Assets/Frontend_Assets/data";
import Item from "../Item/Item";
const RelatedProjects = () => {
  return (
    <div className="relatedprojects">
      <h1>Related Projects</h1>
      <hr />
      <div className="relatedprojects-item">
        {data_product.map((item, i) => {
          {
            /* Mapping through the data_product array to render Item components */
          }
          return (
            <Item
              key={i}
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

export default RelatedProjects;
