import { useState } from 'react';
import styled from 'styled-components';

import Login from '../components/Authorization/Login'
import SignUp from '../components/Authorization/SignUp';

const Authorization = () => {

    const [ signup, setSignup ] = useState(false); 

    const handleChange = e => {
        setSignup(!signup);
    };


    if (!signup) {
        return (
            <StyledAuthContainer>
                <Login />
                <div className="authRadioConainer">
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
        <>
            <SignUp />
            <button onClick={handleChange}>Back To Login.</button>
        </>
    )

};

const StyledAuthContainer = styled.div`
    width: 25rem;
    margin: 1rem auto;
    padding: 3% 2%;
    border: 6px solid dodgerblue;
    border-radius: 5px;
`;

export default Authorization; 