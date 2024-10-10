// src/DropdownMenu.js

import React, { useRef, useState, useEffect } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Inline styles
  const dropdownStyle = {
    position: "relative",
    display: "inline-block",
  };

  const buttonStyle = {
    padding: "10px 20px",
    cursor: "pointer",
  };

  const menuStyle = {
    position: "absolute",
    top: "100%",
    left: "0",
    backgroundColor: "white",
    border: "1px solid #ccc",
    listStyleType: "none",
    padding: "0",
    margin: "0",
    width: "150px",
    zIndex: 1,
  };

  const menuItemStyle = {
    padding: "10px",
    cursor: "pointer",
  };

  return (
    <div style={dropdownStyle} ref={dropdownRef}>
      <button onClick={toggleDropdown} style={buttonStyle}>
        {isOpen ? "Close Menu" : "Open Menu"}
      </button>
      {isOpen && (
        <ul style={menuStyle}>
          {["Option 1", "Option 2", "Option 3"].map((option, index) => (
            <li
              key={index}
              style={menuItemStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#f0f0f0")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "white")
              }
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
