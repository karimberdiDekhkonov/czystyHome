import { Link } from "react-router-dom";
import { logo } from "../constant";
import { Category, Menu, Translation } from "..";
import { useState } from "react";

const Navbar = () => {
  const [selectedCategory, setSelectedCategory] = useState("regular");

  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  return (
    <div
      className="d-flex justify-content-between align-items-center p-3"
      style={{ position: "sticky", top: 0, zIndex: 999, background: "#FFFFFF" }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={130} width={150}/>
      </Link>
      <Menu />
      <Translation />
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Navbar;
