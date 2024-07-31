import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import RelatedProjects from "../Components/RelatedProducts/RelatedProjects";

export const Product = () => {
  // Access the shop context to get all products
  const { all_product } = useContext(ShopContext);

  // Get the product ID from the URL parameters
  const { productId } = useParams();

  // Find the product matching the ID from the context
  const product = all_product.find((e) => e.id === Number(productId));

  // If the product is not found, display a "Product not found" message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {/* Display breadcrumb navigation for the product */}
      <Breadcrum product={product} />

      {/* Display detailed information about the product */}
      <ProductDisplay product={product} />

      {/* Display a description box (could be product details or additional info) */}
      <DescriptionBox />

      {/* Display related projects or products */}
      <RelatedProjects />
    </div>
  );
};

export default Product;
