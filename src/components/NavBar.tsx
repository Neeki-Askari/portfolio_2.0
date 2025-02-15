import { useContext } from 'react';
import { MaterialUISwitch } from '../AppStyled';
import { NavBarContentContainer, NavBarOuterContainer } from './NavBarStyled';
import { ThemeContext, ThemeContextValues } from '../context/themeContext';

export const NavBar: React.FC<{showNavBar: boolean}> = ({showNavBar}) => {
      const {theme, toggleTheme} = useContext(ThemeContext) as ThemeContextValues;
    
    return(
        <NavBarOuterContainer 
        className={`navbar ${showNavBar ? 'show-nav' : 'hide-nav'}`}
        theme={theme}
        >
            <NavBarContentContainer>
                <h2>Neeki</h2>
                <MaterialUISwitch 
                        defaultChecked    
                        onChange={() => toggleTheme()}
                />
            </NavBarContentContainer>
        </NavBarOuterContainer>
    )
}
