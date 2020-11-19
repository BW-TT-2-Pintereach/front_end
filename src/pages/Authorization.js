import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Login from '../components/Authorization/Login'
import SignUp from '../components/Authorization/SignUp';


// Consider UX - moving alerts etc. 

const Authorization = () => {

    const [ signup, setSignup ] = useState(false); 

    const toggleSignup = e => {
        setSignup(!signup);
    };


    if (!signup) {
        return (
            <StyledBody>
                <StyledAuthContainer>
                    <Login />
                    <div className="authCheckbox">
                        <label>Need to Create an Account?</label>
                        <input 
                            name="signup"
                            type="checkbox"
                            checked={signup}
                            onChange={toggleSignup}
                        />
                    </div>
                </StyledAuthContainer>
            </StyledBody>
        )
    }

    return (
        <StyledBody>
            <StyledAuthContainer>
                <SignUp />
                <div className="authCheckbox">
                    <label>Allready Have an Account?</label>
                    <input 
                        name="signup"
                        type="checkbox"
                        checked={!signup}
                        onChange={toggleSignup}
                    />
                </div>
            </StyledAuthContainer>
        </StyledBody>
    )

};

const StyledBody = styled.div`
    display: inline-block; 
    height: 90vh; 
    width: 100%;
`;

const StyledAuthContainer = styled.div`
    width: 25rem;
    margin: 20vh auto 0;
    height: 30vh;
    padding: 3% 2%;
    border: 6px solid dodgerblue;
    border-radius: 5px;
    background-color: whitesmoke;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;

    button {
        width: 7rem;
        margin: 1rem auto;
        padding: 2%;
        font-weight: bold;
        font-size: 1rem;
        background: white; 
        border: 3px solid #2f2f3a;
        transition: 1s;

        &:hover {
            color: white; 
            background-color: #2f2f3a;
            border-color: dodgerblue;
        }
    }
`;

export default Authorization; 