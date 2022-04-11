import React from "react";
import "./index.scss";
import { MenuBtn } from "../Buttons";

const Header = () => {
  return (
    <div className="Header-container">
      <p className="Header-logo">
        <span className="Header-logo_s">$</span>lon
      </p>
      <MenuBtn />
    </div>
  );
};
export default Header;
