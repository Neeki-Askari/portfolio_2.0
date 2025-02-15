
import HomePage from "./components/pages/homePage";
import { MaterialUISwitch, SwitchContainer } from "./AppStyled";
import { useContext, useEffect, useState } from "react";
import { ThemeContext, ThemeContextValues } from "./context/themeContext";
import Projects from "./components/pages/projects/Projects";
import { NavBar } from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextValues;
  const [showNavBar, setShowNavBar] = useState(false);

  const fadeInNavBar = () => {
    if (window !== undefined)  {
        const scrollYPosition = window.scrollY;
        scrollYPosition > 400 ? setShowNavBar(true) : setShowNavBar(false)
    } else {
      setShowNavBar(false)
    }
};

  useEffect(() => {
    document.body.className = theme; // where theme is "dark" or "light"
    window.addEventListener("scroll", fadeInNavBar);
    
    return () => window.removeEventListener('scroll', fadeInNavBar);
  }, [theme, showNavBar]);

  return (
    <main>
        <NavBar showNavBar={showNavBar}/>
        <SwitchContainer>
        <MaterialUISwitch 
        defaultChecked    
        onChange={() => toggleTheme()}

        />
        </SwitchContainer>
        <HomePage />
        <Projects />
        <Footer />
    </main>
  );
}

export default App;
