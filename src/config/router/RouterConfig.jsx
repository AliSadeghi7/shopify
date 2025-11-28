import { Route, Routes } from "react-router-dom";
import Cart from "../../pages/Cart";
import PagesWrapper from "../../app/PagesWrapper";
import Landing from "../../pages/Landing";
import AboutUs from "../../pages/AboutUs";
import ContactUs from "../../pages/ContactUs";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Products from "../../pages/Products";
import ProductDetail from "../../pages/ProductDetail";
import Register from "../../pages/Register";
import WishList from "../../pages/WishList";

const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/cart" element={<Cart />} />
      <Route path="/" element={<PagesWrapper />}>
        <Route path="/" exact element={<Landing />} />
        <Route path="/" element={<Landing />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<WishList />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
