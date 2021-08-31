import './Signin.css';
import Login from './components/Login';
import Register from './components/Register';
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import API from './api/express';


export default function Signin() {
    const history = useHistory();
    

    const [signin, setSignin] = useState(true);
    const [errorLogin, setErrorLogin] = useState('');
    const [errorRegister, setErrorRegister] = useState('');

    function toggle() {
        setSignin(!signin);
    }

    async function register(data){
        
        try {
            const res = await API.signup(data);
            const { token } = res.data;
            
            window.localStorage.setItem("token", token);
            history.push('/MyTodosHome');
            console.log(window.localStorage.getItem("token"));

        } catch (error) {
            console.log(error)
            setErrorRegister("There is an account associated with this email. Please try again with another email")
            
        }
        
    }
    
    async function login(data){
        
        try {
            const res = await API.signin(data);
            
            const { token } = res.data;
            
            window.localStorage.setItem("token", token);
            history.push('/MyTodosHome')
            
        } catch (error) {
            console.log(error)
            setErrorLogin("The email address or the password you have keyed in is incorrect. Please try again")
        }
        
 
      }

    


    return (
        <>
            <div className="home-container">
                <div className="login-container">
                    {signin ? <Login toggleForm={toggle} login={login} error={errorLogin} /> : <Register toggleForm={toggle} register={register} error={errorRegister}/>}
                </div>  
            </div>
        </>
    )
}

