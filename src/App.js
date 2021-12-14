/** @jsxImportSource theme-ui */

import { useColorMode } from "theme-ui";
import { useMediaQuery } from "react-responsive";

import "./App.css";

function App() {
  const [colorMode, SetColorMode] = useColorMode();

  useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isDarkPreffered) => SetColorMode(isDarkPreffered ? "dark" : "light"),
  );

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
