import { useState } from 'react'; 
import { NavLink, Link } from 'react-router-dom';

import { Menu, MenuItem, Button } from '@material-ui/core'
// import { styled } from '@material-ui/core/styles'
import styled from 'styled-components';




const Nav = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = ()  => {
        setAnchorEl(null);
    }

    return (
        <StyledHeader>
            <h2>Pintereach</h2>
            <Button onClick={handleClick}>
                Open Nav
            </Button>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to='/' onClick={handleClose}>Home</MenuItem>
                <MenuItem component={Link} to='/readinglist' onClick={handleClose}>Reading List</MenuItem>

            </Menu>
        </StyledHeader>

        // <StyledHeader>
        //     <StyledFlex>
        //         <h2>Pintereach</h2>
        //         <div className="navLinkContainer">
        //             <NavLink to="/">Home</NavLink>
        //             <NavLink to="/readinglist">Reading List</NavLink>
        //             <NavLink to="#">Logout</NavLink>
        //         </div>
        //     </StyledFlex>
        // </StyledHeader>

    );
};


const StyledHeader = styled.header`
    background: #4492E0; 
    padding: 1rem; 
    display: flex;
    justify-content: space-between;

    h2 {
        font-family: 'Lobster', cursive;
        font-size: 3rem;
    }

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

export default Nav;