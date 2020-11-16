import { useState } from 'react';

import Login from '../components/Login'
import SignUp from '../components/SignUp';

const Authorization = () => {

    const [ signup, setSignup ] = useState(false); 

    const handleChange = e => {
        setSignup(!signup);
    };


    if (!signup) {
        return (
            <>
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
            </>
        )
    }

    return (
        <>
            <SignUp />
            <button onClick={handleChange}>Back To Login.</button>
        </>
    )

};

export default Authorization; 