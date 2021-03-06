import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

  height: 100vh;
  background: #131313;
  font-family: "monteserrat", sans-serif;
  color: #ffffff;
  font-weight: bolder;

  header span {
    color: var(--green);
    letter-spacing: 1px;
    font-size: 2em;
  }

  a {
    text-decoration: none;
    color: var(--green);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;
    margin: auto;
  }

  /* Header */
  header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-bottom: lightgray solid 1px;
    height: 105px;
    margin-bottom: 40px;
  }

  header img {
    width: 190px;
  }

  /* Login Buttons */
  h2 {
    font-size: 1.5em;
    padding-bottom: 15px;
  }
  .fb-btn {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding-bottom: 10px;
  }
  .fb-btn button {
    width: 100%;
    height: 45px;
    border-radius: 50px;
    background: #3b5998;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }

  .fb-btn button:hover {
    background: #4d74c7;
  }
  /* https://img1.gratispng.com/20180425/fsq/kisspng-google-logo-gooole-5ae067e09a1dc8.0489792815246560966313.jpg */
  .apl-btn {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding-bottom: 20px;

    button {
      width: 100%;
      height: 45px;
      border-radius: 50px;
      background: #000000;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 16px;
      border: none;

      &:hover {
        background: #181818;
      }
    }
  }

  /* OR */
  .or {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .or .bar {
    width: 100%;
    padding: 0;
    margin: 0;
    border: 0;
    border-bottom: lightgray 1px solid;
  }

  .or h3 {
    margin: 0 20px;
    font-size: 12px;
    font-weight: bold;
  }

  h3 {
    font-weight: lighter;
    text-transform: uppercase;
    font-size: 16px;
  }

  /* Form */
  .inputs {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 15px;
  }
  .inputs input {
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    padding-left: 5px;
    font-size: 16px;
    font-weight: bold;
    background: rgb(36, 36, 36);
    border: lightgray 1px solid;
    color: lightgray;
  }

  /* Login Buttons */
  .login {
    display: inline;
    width: 100%;
    margin-bottom: 20px;
  }

  .login input[type="checkbox"] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid var(--green);
    margin-top: 10px;
  }

  .login input[type="checkbox"]:checked {
    background: var(--green);
    border-radius: 50%;
  }

  .login label {
    vertical-align: middle;
    padding-left: 10px;
  }
  .login button {
    float: right;
    padding: 15px 80px;
    border-radius: 90px;
    background: var(--green);
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }

  .login button:hover {
    background: #e80808;
  }

  .bar2 {
    padding: 20px 0;
    width: 100%;
    border: 0;
    border-bottom: 1px lightgray solid;
  }

  h1 {
    font-size: 18px;
    margin-top: 40px;
  }

  .signup-btn {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
  }
  .signup-btn button {
    width: 100%;
    height: 45px;
    border-radius: 50px;
    background: rgb(36, 36, 36);
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    border: lightgray 1px solid;
  }

  .signup-btn button:hover {
    background: lightgray;
    color: black;
  }

  .bar3 {
    padding: 10px 0;
    width: 100%;
    border: 0;
    border-bottom: 1px lightgray solid;
  }

  p {
    padding: 10px 0;
    font-size: 10px;
    text-align: center;
  }
`;
