import React from "react";
import { Route, Routes as MyRoutes } from "react-router-dom";
import Home from "../pages/home/Home";
import ShopingPage from "../pages/shopingPage/ShoppingPage";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const Routes = () => {
  return (
    <MyRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/Cart" element={<ShopingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

    </MyRoutes>
  );
};

export default Routes;
