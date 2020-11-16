import { useState } from 'react'; 


const initialInput = { 
    username: "", 
    password: ""
};

const Login = () => {

    const [ userInput, setUserInput ] = useState(initialInput);

    const handleChange = e => {
        setUserInput({
            ...userInput, 
            [e.target.name]: e.target.value
        });
    };

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
            </div>
        </div>
    )

};

export default Login;