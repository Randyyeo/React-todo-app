
import { useRef, useState } from 'react'
import ShowIcon from '@material-ui/icons/Visibility';
import ShowOffIcon from '@material-ui/icons/VisibilityOff';


export default function Login({ toggleForm, login, error }) {
    const email = useRef();
    const password = useRef();
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    function submit(e) {
        e.preventDefault();

        
        const enteredEmail = email.current.value;
        const enteredPassword = password.current.value;
        

        const data = {
            email: enteredEmail,
            password: enteredPassword,
        }

        login(data);
        /* router.push('./login'); */

    }

    /* const googleSuccess = (res) => {
        console.log(res);
    }
    
    const googleFailure = () => {
        console.log("Google Sign In was unsucessful. Try Again Later")
    }  */

    return (
        <>
            <form className="form" onSubmit={submit}>
                <label htmlFor="username"><strong>Email</strong></label>
                <input className="username" type="text" id="username" ref={ email }/><br />
                <label htmlFor="password"><strong>Password</strong></label>
                <div className="passwordContainer">
                    <input className="username" type={showPassword ? "text" : "password"} id="password" ref={password} /><i className="icon" onClick={handleShowPassword}>
                        {showPassword ? <ShowIcon /> : <ShowOffIcon />}</i>
                </div>
                <button className="button">Login</button>
                {error ? <div className="error">{error}</div> : ''}
            </form>
            <div className="signup">
                <p>New User? <span className="toggle" onClick={toggleForm}><u>Create an account</u></span></p>
            </div>
            <div>
                
            </div>
        </>
    )
}