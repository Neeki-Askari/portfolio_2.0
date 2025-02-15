import { DividerStyled, FooterOuterContainer, LinksContainer, LinkWrapper } from "./FooterStyled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { useContext } from "react";
import { ThemeContext, ThemeContextValues } from "../context/themeContext";

const Footer: React.FC = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextValues;
    const iconList = [
        {
            icon: <LinkedInIcon fontSize="large" />,
            url: "https://www.linkedin.com/in/neeki-askari/"
        },
        {
            icon: <GitHubIcon fontSize="large" />,
            url: "https://github.com/Neeki-Askari"
        },
        {
            icon: <EmailIcon fontSize="large" />,
            url: "mailto: neeki.askari@gmail.com"
        },
    ];

    return(
        <FooterOuterContainer theme={theme}>
            <DividerStyled theme={theme}/>
            <LinksContainer>
                {
                    iconList.map((linkInfo) => {
                        return (
                            <LinkWrapper
                            onClick={() => window.open(linkInfo.url, "_blank")}
                            >
                                {linkInfo.icon}
                            </LinkWrapper>
                        )
                    })
                }
            </LinksContainer>
        </FooterOuterContainer>
    )
}

export default Footer;
