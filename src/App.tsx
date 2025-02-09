
import HomePage from "./components/pages/homePage";
import { MaterialUISwitch, SwitchContainer } from "./AppStyled";
import { useContext, useEffect } from "react";
import { ThemeContext, ThemeContextValues } from "./context/themeContext";
import Projects from "./components/pages/projects/Projects";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextValues;
  
  useEffect(() => {
    document.body.className = theme; // where theme is "dark" or "light"
  }, [theme]);

  return (
    <main>
        <SwitchContainer>
        <MaterialUISwitch 
        defaultChecked    
        onChange={() => toggleTheme()}

        />
        </SwitchContainer>
        <HomePage />
        <Projects />
    </main>
  );
}

export default App;
