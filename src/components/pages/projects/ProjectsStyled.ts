import styled from '@emotion/styled';
import { Card } from '@mui/material';
import { DeviceBreakpoints } from '../../constants/styledConstants';

export const ProjectsOuterContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
`
export const Header = styled.h1`
    font-size: 2.5rem;
`
export const CardStyled = styled(Card)`
    max-width: 425px;
    height: 350px;
    color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
    background-color: ${props => (props.theme === 'dark' ? '#1F1D1B' : '#E8E8E8')};
`
export const ProjectsInnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 36px;
    margin-top: 0.5rem;
    padding: 1.5rem;
    @media (max-width: ${DeviceBreakpoints.DESKTOP}) {
        flex-direction: column;
    }
`
