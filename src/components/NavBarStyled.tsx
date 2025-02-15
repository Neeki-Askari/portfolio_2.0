import styled from '@emotion/styled';

export const NavBarOuterContainer = styled.div`
    width: 100vw;
    height: 50px;
    background-color: ${props => (props.theme === 'dark' ? 'rgb(10, 20, 38)' : 'rgb(220,220,220)')};
    z-index: 20;  
    display: flex;
    justify-content: center;
`
export const NavBarContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 95%;
`
