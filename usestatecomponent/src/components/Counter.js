import React, { useState } from "react";

const Counter = () => {
  // Declare a state variable 'count' and a function to update it
  const [count, setCount] = useState(0);

  // Function to handle increment
  const increment = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", fontSize: "2rem" }}>Counter: {count}</h1>
      <button
        onClick={increment}
        style={{
          margin: "5px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <button
        onClick={decrement}
        style={{
          margin: "5px",
          padding: "10px 20px",
          fontSize: "1rem",
          backgroundColor: "#f44336",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
