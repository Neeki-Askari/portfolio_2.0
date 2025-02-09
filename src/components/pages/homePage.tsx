import { ButtonStyled, Header, HeaderContainer, HomePageOuterContainer, IntroContainer, LinksContainer, Name, PhotoContainer, SubHeader } from "./homePageStyled";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ThemeContext, ThemeContextValues } from "../../context/themeContext";
import { useContext } from "react";

const HomePage: React.FC = () => {
    const {theme} = useContext(ThemeContext) as ThemeContextValues
    return (
        <HomePageOuterContainer>
            <PhotoContainer src="cropped.png"/>
            <IntroContainer theme={theme}>
                <HeaderContainer>
                    <Header>Hello, my name is </Header>
                    <Name>Neeki Askari</Name>
                </HeaderContainer>
                <SubHeader>I am a Full Stack Software Engineer eager to solve problems with innovative and efficient solutions.</SubHeader>
                <LinksContainer className={theme}>
                <ButtonStyled 
                    theme={theme}
                    startIcon={<DownloadIcon />}
                    onClick={() => window.open("resume.pdf", "_blank")}
                >
                    Download my resume
                </ButtonStyled>
                <ButtonStyled
                    theme={theme}
                    startIcon={<LinkedInIcon fontSize="large"/>}
                    onClick={() => window.open("https://www.linkedin.com/in/neeki-askari/", "_blank")}
                >
                    Connect on LinkedIn
                </ButtonStyled>
                </LinksContainer>
                <ButtonStyled
                theme={theme}
                startIcon={<GitHubIcon fontSize="large"/>}
                onClick={() => window.open("https://github.com/Neeki-Askari", "_blank")}
                sx={{
                    "marginTop": "8px",
                    "width": "220px"
                }}
                >
                    Check out my GitHub
                </ButtonStyled>
            </IntroContainer>
        </HomePageOuterContainer>
    )
}

export default HomePage;
