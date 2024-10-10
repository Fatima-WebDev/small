import React, { useState, useEffect } from "react";

const UserNameComponent = () => {
  const [userName, setUserName] = useState("TestUserName");
  const [inputValue, setInputValue] = useState("");

  // Effect to log user name changes
  useEffect(() => {
    console.log(`User name changed to: ${userName}`);
  }, [userName]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(inputValue);
    setInputValue("");
  };

  // Inline styles
  const styles = {
    container: {
      textAlign: "center",
      margin: "20px",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      marginRight: "10px",
    },
    button: {
      padding: "10px 15px",
      fontSize: "16px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>User Name: {userName}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter new user name"
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.button.backgroundColor)
          }
        >
          Update User Name
        </button>
      </form>
    </div>
  );
};

export default UserNameComponent;
