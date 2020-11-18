import { useState } from 'react'; 
import { TextField } from '@material-ui/core';

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
                <label>Username:</label>
                <TextField 
                    type="text"
                    name="username"
                    value={userInput.username}
                    onChange={handleChange}
                />
                <label>Password: </label>
                <TextField 
                    type="text"
                    name="password"
                    value={userInput.password}
                    onChange={handleChange}
                />
            </div>
            <button onClick={signUp}>Create Account!</button>
        </div>
    )

};

export default SignUp;