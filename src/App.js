/** @jsxImportSource theme-ui */

import { useColorMode } from "theme-ui";

import "./App.css";

function App() {
  const [colorMode, SetColorMode] = useColorMode();
  return (
    <div className="App">
      <header className="App-header">
        <p sx={{ color: "primary" }}>Dark mode theme ui practice</p>

        <button
          onClick={() => SetColorMode(colorMode === "light" ? "dark" : "light")}
          sx={{ backgroundColor: "primary", color: "inverseText" }}
        >
          Click for {colorMode === "light" ? "Dark 🌙" : "Light ☀️"} Theme
        </button>
      </header>
    </div>
  );
}

export default App;
