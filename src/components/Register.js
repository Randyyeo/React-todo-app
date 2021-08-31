
import { useState, useRef } from 'react';
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';


export default function Register({ register, toggleForm, error }) {
    
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const password = useRef();
    const re_password = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword_2, setShowPassword_2] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleShowPassword_2 = () => {
        setShowPassword_2(!showPassword_2);
    }

    function submit(e) {
        e.preventDefault();

        const enteredFirstName = firstName.current.value;
        const enteredLastName = lastName.current.value;
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        const enteredRePassword = re_password.current.value;

        const data = {
            firstName: enteredFirstName,
            lastName: enteredLastName,
            email: enteredEmail,
            password: enteredPassword,
            re_password: enteredRePassword
        }

        register(data);
        /* router.push('./login'); */

    }

    return (
        <>
            <form className="form" onSubmit={submit}>
                <div className="names">
                    <div className="firstName">
                        <label htmlFor="username"><strong>First Name</strong></label>
                        <input className="username" type="text" ref={firstName} /><br />
                    </div>
                    <div className="firstName">
                        <label htmlFor="username"><strong>Last Name</strong></label>
                        <input className="username" type="text" ref={lastName} /><br />
                    </div>
                </div>
                <label htmlFor="username"><strong>Email</strong></label>
                <input className="username" type="text" ref={email}/><br />
                <label htmlFor="password"><strong>Password</strong></label>
                <div className="passwordContainer">
                    <input className="username" type={showPassword ? "text" : "password"} id="password" ref={password} /><i className="icon" onClick={handleShowPassword}>
                        {showPassword ? <ShowIcon /> : <ShowOffIcon />}</i>
                </div>
                
                <label htmlFor="password"><strong>Re-confirm Password</strong></label>
                <div className="passwordContainer">
                    <input className="username" type={showPassword_2 ? "text" : "password"} id="password" ref={re_password} /><i className="icon" onClick={handleShowPassword_2}>
                        {showPassword_2 ? <ShowIcon /> : <ShowOffIcon />}</i>
                </div>
                
                <button className="button">Register</button>
                {error ? <div className="error">{error}</div> : ''}
            </form>
            <div className="signup">
                <p>Already have an account? <span className="toggle" onClick={toggleForm}><u>Let's sign in!</u></span></p>
            </div>
            
        </>
    )
}