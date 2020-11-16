import { useState } from 'react'; 


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

    return (
        <div className="authForm">
            <h3>Sign up for a New Account! </h3>
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

export default SignUp;