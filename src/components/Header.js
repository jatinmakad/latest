import React from "react";
import BgTop from "../Images/bgTop.png";
import '../App.css';
function Header() {
  return (
    <div className="header">
      <img src={BgTop} alt="" className="w-100 h-100" />
      <div className="header-inner">
        <i class="fas fa-chevron-left"></i>
        <h1>Order History</h1>
      </div>
    </div>
  );
}

export default Header;
