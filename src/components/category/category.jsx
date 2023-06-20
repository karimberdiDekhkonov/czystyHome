import { category } from "../constant";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  const { t } = useTranslation();
  return (
    <div className="d-flex flex-row">
      {category.map((item) => (
        <Link
          to={`/${item.path}`}
          style={{
            borderRadius: "5px",
            background: item.name === selectedCategory && "#ffea84",
          }}
          className="orders1"
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <div className="d-flex align-items-center flex-column ">
            <img className="category-img" src={item.icon} alt={item.name} />
            <span
              style={{
                opacity: "1",
                marginTop: "7px",
                fontSize: "20px",
                width: "100%",
                display: "inline-block",
              }}
            >
              {t(`${item.name}`)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
