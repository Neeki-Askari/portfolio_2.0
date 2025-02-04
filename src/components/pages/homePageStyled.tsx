import styled from '@emotion/styled';
import { DeviceBreakpoints } from '../constants/styledConstants';
import { Button } from '@mui/material';

//light mode #ccbebf
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
    gap: 50px;
  }
`;

export const PhotoContainer = styled.img`
  max-width: 400px;
  max-height: 400px;
  min-height: 175px;
  min-width: 175px;
  border-radius: 50%;
  z-index: 3;
  @media (max-width: ${DeviceBreakpoints.MOBILE}){
      width: 250px;
      height: 250px;
  }
`;

export const IntroContainer = styled.div`
 background-color: rgb(10, 20, 38, 0.5);
 border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    @media (min-width: 431px){
      padding: 30px;
  }
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
gap: 25px;
max-width: 485px;
  @media (max-width: ${DeviceBreakpoints.MOBILE}){
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  }
`
export const ButtonStyled = styled(Button)`
  color: #FFFFFF;
  border-color: #FFFFFF;
  border: 1px solid #FFFFFF;
  &:hover {
    background-color: rgb(192,192,192, 0.2);
  }
`
