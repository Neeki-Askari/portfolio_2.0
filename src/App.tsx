
import HomePage from "./components/pages/homePage";
import { MaterialUISwitch, SwitchContainer } from "./AppStyled";
import { useContext } from "react";
import { ThemeContext, ThemeContextValues } from "./context/themeContext";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextValues;

  return (
    <main className={theme}>
      <div>
      <SwitchContainer>
      <MaterialUISwitch 
      defaultChecked    
      onChange={() => toggleTheme()}
      sx={{
        "margin": "75px;"
      }}
      />
      </SwitchContainer>
      <HomePage />
      </div>
    </main>
  );
}

export default App;
