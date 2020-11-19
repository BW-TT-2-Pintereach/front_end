import { useState } from 'react'; 
import { useHistory } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

import { axiosDev } from '../../utils/axiosDev';


const initialInput = { 
    username: "", 
    password: ""
};

const Login = () => {

    const { push } = useHistory("/");

    const [ userInput, setUserInput ] = useState(initialInput);

    const handleChange = e => {
        setUserInput({
            ...userInput, 
            [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault(); 
        axiosDev().post('/users/login', userInput)
            .then((res)=> {
                window.localStorage.setItem('token', res.data.token);
                console.log("Success: Lets Move")
                push('/');
            })
            .catch(err => alert(err.message)) // !!! BUILD ERROR HANDLIGN !!!
    }

    return (
        <div className="authForm">
            <h3>Login: </h3>
            <StyledAuthInput>
                <TextField
                    className="textField" 
                    type="text"
                    name="username"
                    value={userInput.username}
                    onChange={handleChange}
                    placeholder="username"
                />
                <TextField
                    className="textField" 
                    type="text"
                    name="password"
                    value={userInput.password}
                    onChange={handleChange}
                    placeholder="password"
                />
                <button onClick={login}>Login</button>
            </StyledAuthInput>
        </div>
    )

};


const StyledAuthInput = styled.div`
    display: flex; 
    flex-flow: column nowrap;

    .textField {
        margin-top: 1rem;
    }

`;



export default Login;