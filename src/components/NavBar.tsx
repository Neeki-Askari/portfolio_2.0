import styled from '@emotion/styled';

const NavBarStyled = styled.div`
    width: 100vw;
    height: 50px;
    background-color: #041223;
    transition: top 0.3s ease-in-out;
    position: absolute;
    z-index: 10;

    .fixed {
    position: fixed;
    top: 0;
    left: 0;
  }
`
export const NavBar: React.FC<{showNavBar: boolean}> = ({showNavBar}) => {
    return(
        <NavBarStyled className={`navbar ${showNavBar ? 'fixed' : ''}`}>
        </NavBarStyled>
    )
}