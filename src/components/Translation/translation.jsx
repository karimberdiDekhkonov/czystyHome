import React, { useState } from "react";
import i18next from "i18next";
import { flagEng, flagPl } from "../constant";

const Translation = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lng", lng);
    setSelectedLanguage(lng);
    setIsDropdownOpen(false);
  };

  const countryType = [
    {
      name: "English",
      flag: flagEng,
      code: "en",
    },
    {
      name: "Polish",
      flag: flagPl,
      code: "pl",
    },
  ];

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (code) => {
    handleClick(code);
  };

  return (
    <div className="App">
      <div className="select-container">
        <div className="selected-option" onClick={handleToggleDropdown}>
          <img
            src={selectedLanguage === "en" ? flagEng : flagPl}
            alt="Selected Flag"
          />
          <p className="selected-option-name">
            {selectedLanguage === "en" ? "English" : "Polish"}
          </p>
        </div>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            {countryType.map((country) => (
              <div
                key={country.code}
                onClick={() => handleLanguageSelect(country.code)}
                className="dropdown-item"
              >
                <img src={country.flag} alt={country.name} />
                <p className="dropdown-item-name">{country.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Translation;
