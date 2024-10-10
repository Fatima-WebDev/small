import "./App.css";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginTop: "50px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h1>Simple Dropdown Menu</h1>
        <DropdownMenu />
      </div>
    </>
  );
}

export default App;
