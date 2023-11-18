import React, { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`topbar ${menuActive ? "active" : ""}`}>
      <div className="topleft">
        {/* Put your logo or any other content here */}
      </div>
      <div className={`topcenter ${menuActive ? "active" : ""}`}>
        <ul className="topList">
          <Link to="/" className="topListItem">
            HOME
          </Link>
          <Link to="/about" className="topListItem">
            ABOUT
          </Link>
          <Link to='/contact' className="topListItem">CONTACT</Link>
          <Link to="/categories" className="topListItem">
            CATEGORIES
          </Link>
          {/* <Link to="#" className="topListItem">BLOG</Link> */}
        </ul>
      </div>
      <div className="hamburger-menu" onClick={handleMenuClick}>
        {/* Add any icon or text you want to represent the menu for small devices */}
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}
