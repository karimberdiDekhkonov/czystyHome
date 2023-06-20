import React, { useState, useEffect, useRef } from "react";
import { MenuIcon } from "../constant";
import { Link } from "react-router-dom";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClick = (e) => {
    if (menuRef.current && menuRef.current.contains(e.target)) {
      return;
    }

    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div>
      <button onClick={handleMenuClick} className="menu-icon">
        <MenuIcon />
      </button>
      {isMenuOpen && (
        <div ref={menuRef}>
          <div className="menu-content d-flex justify-content-between align-items-center ">
            <div className="d-flex flex-column  ">
              <Link to={"/about"}>About</Link>
              <Link to={"/services"}>Our services</Link>
              <Link to={"/weClean"}>What we clean</Link>
              <Link to={"/prices"}>Prices for our services</Link>
              <Link to={"/subscription"}>Cleaning subscription</Link>
            </div>

            <div className="d-flex flex-column ">
              <Link to={"/reviews"}>Reviews</Link>
              <Link to={"/referral"}>Referral program</Link>
              <Link to={"/question"}>Q&A</Link>
              <Link to={"/partner"}>Our partners</Link>
              <Link to={"/offer"}>Offers for Business</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
