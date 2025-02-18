import { useContext } from 'react';
import { MaterialUISwitch } from '../AppStyled';
import { HeaderName, NavBarContentContainer, NavBarOuterContainer } from './NavBarStyled';
import { ThemeContext, ThemeContextValues } from '../context/themeContext';

export const NavBar: React.FC<{showNavBar: boolean}> = ({showNavBar}) => {
      const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextValues;
    
    return(
        <NavBarOuterContainer 
        className={`navbar ${showNavBar ? 'show-nav' : 'hide-nav'}`}
        theme={theme}
        >
            <NavBarContentContainer>
                <HeaderName onClick={() => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}>Neeki</HeaderName>
                <MaterialUISwitch 
                        defaultChecked    
                        onChange={() => toggleTheme()}
                />
            </NavBarContentContainer>
        </NavBarOuterContainer>
    )
}
