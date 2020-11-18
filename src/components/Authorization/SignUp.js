import { useState } from 'react'; 
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

import { axiosDev } from '../../utils/axiosDev';


const initialInput = { 
    username: "", 
    password: ""
};

const SignUp = () => {

    const [ userInput, setUserInput ] = useState(initialInput);

    const handleChange = e => {
        setUserInput({
            ...userInput, 
            [e.target.name]: e.target.value
        });
    };

    const signUp = e => {
        e.preventDefault();
        axiosDev().post('/users/signup', userInput)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));

    }

    return (
        <div className="authForm">
            <h3>Sign up for a New Account! </h3>
            <div className="inputs">
                <StyledAuthInput>
                    <TextField 
                        type="text"
                        name="username"
                        value={userInput.username}
                        onChange={handleChange}
                        placeholder="username"
                    />
                    <TextField 
                        type="text"
                        name="password"
                        value={userInput.password}
                        onChange={handleChange}
                        placeholder="password"
                    />
                </StyledAuthInput>
            </div>
            <button onClick={signUp}>Create Account!</button>
        </div>
    )

};

const StyledAuthInput = styled.div`
    display: flex; 
    flex-flow: column nowrap;
`;

export default SignUp;