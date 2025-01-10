import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import "./HomePage.css"

const HomePage: React.FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div className="home-page-container">
            <h2>Great things are in the works — stay tuned!</h2>
            <div>
            <button onClick={ () => {
                toggleTheme()
            }
                }>{theme}</button>
            </div>
        </div>
    )
}

export default HomePage;
