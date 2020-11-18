import { useState } from 'react';
import styled from 'styled-components';

import Login from '../components/Authorization/Login'
import SignUp from '../components/Authorization/SignUp';


// Consider UX - moving alerts etc. 

const Authorization = () => {

    const [ signup, setSignup ] = useState(false); 

    const handleChange = e => {
        setSignup(!signup);
    };


    if (!signup) {
        return (
            <StyledAuthContainer>
                <Login />
                <div className="authRadioContainer">
                    <label>Need to Create an Account?</label>
                    <input 
                        name="signup"
                        type="checkbox"
                        checked={signup}
                        onChange={handleChange}
                    />
                </div>
            </StyledAuthContainer>
        )
    }

    return (
        <StyledAuthContainer>
            <SignUp />
            <button onClick={handleChange}>Back To Login.</button>
        </StyledAuthContainer>
    )

};

const StyledAuthContainer = styled.div`
    width: 25rem;
    margin: 1rem auto;
    padding: 3% 2%;
    border: 6px solid dodgerblue;
    border-radius: 5px;

    .authRadioContainer {
        margin: 1% auto 0;
    }
`;

export default Authorization; 