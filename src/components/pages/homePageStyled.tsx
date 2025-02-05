import styled from '@emotion/styled';
import { DeviceBreakpoints } from '../constants/styledConstants';
import { Button } from '@mui/material';

export const HomePageOuterContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 50px; 
  @media (max-width: ${DeviceBreakpoints.MOBILE}){
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: auto;
    margin: 25px;
  }
  
`;

export const PhotoContainer = styled.img`
  max-width: auto;
  max-height: 400px;
  min-height: 175px;
  min-width: 175px;
  border-radius: 50%;
  object-fit: cover;
  @media (max-width: ${DeviceBreakpoints.MOBILE}){
    width: 300px;
  }
`;

export const IntroContainer = styled.div`

 border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media (min-width: 461px){
      padding: 30px;
  }
  background-color: ${props => (props.theme === 'dark' ? 'rgb(10, 20, 38, 0.5)' : 'rgb(220,220,220, 0.3)')};
`
export const Header = styled.h2`
  font-weight: bold;
  font-size: 2.25em;
  margin: 0px;
`;
export const Name = styled.h1`
  font-size: 4em;
  margin: 0px;
`

export const HeaderContainer = styled.div`
    max-width: 500px;
    @media (max-width: ${DeviceBreakpoints.MOBILE}){
      width: 300px;
      margin-bottom: 0px;
  }
`

export const SubHeader = styled.h3`
font-size: 1.25em;
  max-width: 550px;
  @media (max-width: ${DeviceBreakpoints.MOBILE}){
      width: 300px;
  }
`

export const LinksContainer = styled.div`
display: flex;
gap: 8px;
max-width: 485px;
  @media (max-width: ${DeviceBreakpoints.MOBILE}){
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
`
export const ButtonStyled = styled(Button)`
  border: 1px solid ${props => (props.theme === 'dark' ? 'white' : 'black')};
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  background-color: rgb(220,220,220, 0.3);
  &:hover {
    background-color: rgb(192,192,192, 0.2);
  }
`
