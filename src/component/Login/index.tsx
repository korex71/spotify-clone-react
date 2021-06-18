
import { useContext, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { Container } from './styles';
// import {Link} from "react-router-dom"
// import * as Feather from "react-feather"
import ForgotPassword from '../forgotPassword';

function Login() {
  const {handleLoginGoogle} = useContext(AppContext);
  const [forgotPassword, setForgotPassword] = useState(false);

  if(forgotPassword)
    return <ForgotPassword />

  return (
    <Container>
    <header>
        <a href="/">Sas</a> 
    </header>
        <div className="container w-25">
            <h2 className="loginhead">Para continuar, faça o login.</h2>
            <div className="fb-btn">
                <button>Continuar com Facebook</button>
            </div>
            <div className="apl-btn">
                <button className="bg-light border-dark border text-dark" onClick={handleLoginGoogle}>
                  Continuar com Google
                </button>
            </div>
            <div className="or">
                <hr className="bar"/>
                <span><h3>or</h3></span>
                <hr className="bar"/>
            </div>
            <div className="inputs">
                <input type="text" placeholder="Email address or username"/>
                <input type="password" placeholder="Password"/>
            </div>
            <div className="login">
                <input type="checkbox" name="remember-me" /><label htmlFor="remember-me">Remember Me</label>
                <span className="checkmark"></span>
                <button>Log In</button>
            </div>
            <a href="#forgot" onClick={() => setForgotPassword(true)}>Forgot your password?</a>
            <hr className="bar2"/>
            <h1>Don't have an account?</h1>
            <div className="signup-btn"><button>Inscrever-se</button></div>
            <hr className="bar3"/>
            <p>Logar facebook não o faz de você um de nossos usuários.</p>
        </div>
    </Container>
  );
};

export default Login;
