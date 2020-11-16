import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Nav = () => {
    return (
        <StyledHeader>
            <StyledFlex>
                <h2>Pintereach</h2>
                <div className="navLinkContainer">
                    <NavLink to="#">Home</NavLink>
                    <NavLink to="#">DashBoard</NavLink>
                    <NavLink to="#">Logout</NavLink>
                </div>
            </StyledFlex>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    background: #4492E0; 
    padding: 1rem; 
`;

const StyledFlex = styled.div`
    display: flex; 
    flex-flow: row nowrap; 
    justify-content: space-between;
    align-items: center;

    h2 {
        font-family: 'Lobster', cursive;
        font-size: 3rem;
    }

    .navLinkContainer {
        display: flex; 
        max-width: 40%; 
        justify-content: space-around;
    }

    .navLinkContainer a {
        text-decoration: none; 
        border: 3px solid white; 
        margin: 0 1rem;
        padding: 2%;
        color: white;
        font-weight: bold;
        transition-duration: 1s;

        &:hover {
            color: navy;
            border: 3px solid navy; 
            background-color: white;
            text-decoration: underline;
        }
    }
`;


// font-family: 'Lobster', cursive;
export default Nav;