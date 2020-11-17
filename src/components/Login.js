import { useState } from 'react'; 
import { useHistory } from 'react-router-dom';

import { axiosDev } from '../utils/axiosDev';


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
            .catch(err => console.log(err)) // !!! BUILD ERROR HANDLIGN !!!
    }

    return (
        <div className="authForm">
            <h3>Login: </h3>
            <div className="inputs">
                <label>Username:</label>
                <input 
                    type="text"
                    name="username"
                    value={userInput.username}
                    onChange={handleChange}
                />
                <label>Password: </label>
                <input 
                    type="text"
                    name="password"
                    value={userInput.password}
                    onChange={handleChange}
                />
                <button onClick={login}>Login</button>
            </div>
        </div>
    )

};

export default Login;