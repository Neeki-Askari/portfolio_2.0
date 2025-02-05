import { ButtonStyled, Header, HeaderContainer, HomePageOuterContainer, IntroContainer, LinksContainer, Name, PhotoContainer, SubHeader } from "./homePageStyled";
import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Divider } from "@mui/material";

const HomePage: React.FC = () => {
    return (
        <HomePageOuterContainer>
            <PhotoContainer src="profile.jpeg"/>
            <IntroContainer>
                <HeaderContainer>
                    <Header>Hello, my name is </Header>
                    <Name>Neeki</Name>
                </HeaderContainer>
                <SubHeader>I am a Full Stack Software Engineer looking to solve problems with creative and efficient solutions.</SubHeader>
                <LinksContainer>
                <ButtonStyled 
                    startIcon={<DownloadIcon />}
                    onClick={() => window.open("resume.pdf", "_blank")}
                >
                    Download my resume
                </ButtonStyled>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: 'white' }} />
                <ButtonStyled 
                    startIcon={<LinkedInIcon fontSize="large"/>}
                    onClick={() => window.open("https://www.linkedin.com/in/neeki-askari/", "_blank")}
                >
                    Connect on LinkedIn
                </ButtonStyled>
                </LinksContainer>
            </IntroContainer>
        </HomePageOuterContainer>
    )
}

export default HomePage;
