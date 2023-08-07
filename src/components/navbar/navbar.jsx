import { Link } from "react-router-dom";
import { logo } from "../constant";
import { Category, Menu, Translation } from "..";
import { useState, useEffect } from "react";
import '../../index.css'

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("regular");

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  const [toTopButton, setToTopButton] = useState(false) 

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100){
        setToTopButton(true)
      } else {
        setToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div
      className="d-flex justify-content-between align-items-center header"
      style={{ position: "sticky", top: 0, zIndex: 999, background: "#FFFFFF" }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={130} width={150} />
      </Link>
      <Menu />
      <Translation />
      <button onClick={scrollUp} style={{ border: "none", background: "white" }}>
        <Category
          selectedCategoryHandler={selectedCategoryHandler}
          selectedCategory={selectedCategory}
        />
      </button>
    </div>
  );
};

export default Navbar;
