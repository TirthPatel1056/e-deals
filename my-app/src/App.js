import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import Contact from "./pages/Contact"
import Productdetails from "./pages/Product-details";
import Cart from "./pages/Cart";
import PrivateRoutes from "./helper/PrivateRoutes";
import Products from "./pages/Products";
import UserProfile from "./pages/User-Profile";
import AdminDashboard from "./pages/Admin-Dashboard";
import AdminLogin from "./pages/AdminLogin";


function App() {


  const auth = localStorage.getItem("authToken");




  return (
    <BrowserRouter>

      {/* <Navbar /> */}



      <Routes>


        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/cart" element={<Cart />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>

        <Route path="/products/:category?" element={<Products />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />


        <Route path="/registration" element={<Registration />} />
        <Route path="/product-details/:_id" element={<Productdetails />} />
        <Route path="/product-details/:search" element={<Productdetails />} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
