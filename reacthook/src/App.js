import "./App.css";
import { useState, useEffect } from "react";

function App() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // useEffect hook to update the document title whenever 'count' changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
