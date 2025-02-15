import { DividerStyled, FooterOuterContainer, LinksContainer } from "./FooterStyled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useContext } from "react";
import { ThemeContext, ThemeContextValues } from "../context/themeContext";

const Footer: React.FC = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextValues;
    
    return(
        <FooterOuterContainer theme={theme}>
            <DividerStyled theme={theme}/>
            <LinksContainer>
                <LinkedInIcon 
                fontSize="large"
                onClick={() => window.open("https://www.linkedin.com/in/neeki-askari/", "_blank")}
                />
                <GitHubIcon 
                fontSize="large"
                onClick={() => window.open("https://github.com/Neeki-Askari")}
                />
                <EmailIcon 
                fontSize="large" 
                onClick={() => window.open("mailto: neeki.askari@gmail.com", "_blank")}
                />
            </LinksContainer>
        </FooterOuterContainer>
    )
}

export default Footer;
