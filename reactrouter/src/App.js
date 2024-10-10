import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <h1>
              Welcome! Please <a href="/login">login</a> or{" "}
              <a href="/register">register</a>.
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
