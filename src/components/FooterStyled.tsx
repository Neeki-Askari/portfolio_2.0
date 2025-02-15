import styled from "@emotion/styled";
import { Divider } from "@mui/material";

export const FooterOuterContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 12px;
    display: flex;
    background-color: ${props => (props.theme === 'dark' ? 'rgb(10, 20, 38, 0.5)' : 'rgb(220,220,220, 0.3)')};
    display: flex;
    flex-direction: column;
    
    align-content: center;
`

export const LinksContainer = styled.div`
    margin: 10px 0 10px 0;
    width: 100%; 
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 2rem;
`
export const DividerStyled = styled(Divider)`
    border-color: ${props => (props.theme === 'dark' ? 'rgb(10, 20, 38)' : 'rgb(220,220,220)')};
`
export const LinkWrapper = styled.div`
    cursor: pointer;
`
