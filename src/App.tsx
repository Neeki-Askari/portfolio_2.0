import { AppContentContainer } from "./AppStyled";
import { NavBar } from "./components/NavBar";
import About from "./components/pages/About";
import HomePage from "./components/pages/homePage";

function App() {


  return (
    <main>
      <AppContentContainer>
      <HomePage />
      <NavBar />
      <About />
      </AppContentContainer>
    </main>
  );
}

export default App;
