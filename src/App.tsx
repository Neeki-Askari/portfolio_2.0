
import HomePage from "./components/pages/homePage";
import { MaterialUISwitch } from "./AppStyled";
import { useContext } from "react";
import { ThemeContext, ThemeContextValues } from "./context/themeContext";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextValues;

  return (
    <main className={theme}>
      <div>
      <div style={{
        "display": "flex",
        "justifyContent": "flex-end",
        "width": "100vw",
        "zIndex": "2",
        "position": "fixed"
      }}>
      <MaterialUISwitch 
      defaultChecked    
      onChange={() => toggleTheme()}
      sx={{
        "margin": "75px;"
      }}
      />
      </div>
      <HomePage />
      </div>
    </main>
  );
}

export default App;
