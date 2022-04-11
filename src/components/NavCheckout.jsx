import React from "react";
import { ShoppingBasket } from "@mui/icons-material";

const NavCheckout = () => {
  return (
    <div className="navbar__cart">
      <ShoppingBasket />
      <span className="navbar__cart-count">0</span>
    </div>
  );
};

export default NavCheckout;
