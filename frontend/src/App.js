import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/Frontend_Assets/banner_mens.png";
import women_banner from "./Components/Assets/Frontend_Assets/banner_women.png";
import kid_banner from "./Components/Assets/Frontend_Assets/banner_kids.png";

function App() {
  return (
    <div>
      {/* BrowserRouter component to handle routing */}
      <BrowserRouter>
        {/* Navbar component displayed on all pages */}
        <Navbar />
        {/* Define routes for the application */}
        <Routes>
          {/* Route for the Shop page */}
          <Route path="/" element={<Shop />} />
          {/* Route for the Men's ShopCategory page */}
          <Route
            path="/mens"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          {/* Route for the Women's ShopCategory page */}
          <Route
            path="/womens"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          {/* Route for the Kids' ShopCategory page */}
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          {/* Nested routes for the Product page */}
          <Route path="product" element={<Product />}>
            {/* Route for specific product based on productId */}
            <Route path=":productId" element={<Product />} />
          </Route>
          {/* Route for the Cart page */}
          <Route path="/cart" element={<Cart />} />
          {/* Route for the Login/Signup page */}
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        {/* Footer component displayed on all pages */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
