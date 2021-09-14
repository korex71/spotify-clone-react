import { useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import { Container } from "./styles";
// import * as Feather from "react-feather"
import { IUserData } from "../../contexts/AppContext";
import { Link, useHistory } from "react-router-dom";
import * as Feather from "react-feather";

function Login() {
  const {
    handleLoginGoogle,
    setUser,
    user,
    setUserOnStorage,
    getUserFromStorage,
  } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (user && !user.id) {
      const account = getUserFromStorage();

      account.then((data) => {
        if (data && data.id) history.push("/");
      });
    }
  }, [user]);

  const fakeLogin = () => {
    setUser({
      id: "1",
      name: "Kore",
      photoURL:
        "https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d",
    });

    setUserOnStorage({
      id: "1",
      name: "Kore",
      photoURL:
        "https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d",
    });

    return history.push("/");
  };

  const googleLoginAuth = async () => {
    handleLoginGoogle()
      .then(() => {
        history.push("/");
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <header>
        {/* <span>Songr.ly</span> */}
        <img
          alt="logo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        />
      </header>
      <div className="container">
        <h2 className="loginhead">Para continuar, faça o login.</h2>
        <div className="fb-btn">
          <button>Continuar com Facebook</button>
        </div>
        <div className="apl-btn">
          <button
            className="bg-light border-dark border text-dark"
            onClick={googleLoginAuth}
          >
            <img
              src="https://img1.gratispng.com/20180425/fsq/kisspng-google-logo-gooole-5ae067e09a1dc8.0489792815246560966313.jpg"
              alt=""
            />
            Continuar com Google
          </button>
        </div>
        <div className="or">
          <hr className="bar" />
          <span>
            <h3>or</h3>
          </span>
          <hr className="bar" />
        </div>
        <div className="inputs">
          <input type="text" placeholder="Email address or username" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="login">
          <input type="checkbox" name="remember-me" />
          <label htmlFor="remember-me">Remember Me</label>
          <span className="checkmark"></span>
          <button onClick={fakeLogin}>Log In</button>
        </div>
        <Link to="/forgot">Forgot your password?</Link>
        <hr className="bar2" />
        <h1>Don't have an account?</h1>
        <div className="signup-btn">
          <button>Inscrever-se</button>
        </div>
        <hr className="bar3" />
        <p>Logar facebook não o faz de você um de nossos usuários.</p>
      </div>
    </Container>
  );
}

export default Login;
