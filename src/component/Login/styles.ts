import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

  * {
    margin: 0;
    padding: 0;
  }

  header a {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 566.93 170.04' width='567' height='171'%3E%3Cpath d='M87.996 1.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.254 37.494 83.745 83.743 83.745 46.251 0 83.743-37.491 83.743-83.745 0-46.246-37.49-83.738-83.744-83.738zm38.404 120.78a5.217 5.217 0 0 1-7.177 1.737c-19.665-12.019-44.417-14.734-73.567-8.075a5.217 5.217 0 0 1-6.249-3.925 5.212 5.212 0 0 1 3.926-6.249c31.9-7.293 59.263-4.154 81.336 9.334 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.799c-1.894 3.073-5.912 4.037-8.981 2.15-22.505-13.834-56.822-17.841-83.447-9.759-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 0 1 4.354-8.143c30.413-9.228 68.221-4.758 94.071 11.127 3.07 1.89 4.04 5.91 2.15 8.976zm.88-23.744c-26.994-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 0 1 5.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.833 7.833 0 0 1 2.737 10.733c-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.459-3.448-17.033-5.868-17.033-10.953 0-4.804 4.523-8.037 11.249-8.037 6.52 0 12.985 2.455 19.763 7.509a.945.945 0 0 0 .715.174.934.934 0 0 0 .625-.386l7.06-9.952a.949.949 0 0 0-.18-1.288c-8.067-6.473-17.151-9.62-27.769-9.62-15.612 0-26.517 9.369-26.517 22.774 0 14.375 9.407 19.465 25.663 23.394 13.836 3.187 16.171 5.857 16.171 10.63 0 5.289-4.722 8.577-12.321 8.577-8.44 0-15.324-2.843-23.025-9.512a.992.992 0 0 0-.695-.226.94.94 0 0 0-.65.334l-7.916 9.421a.94.94 0 0 0 .094 1.313c8.96 7.999 19.98 12.224 31.872 12.224 16.823 0 27.694-9.192 27.694-23.419.03-12.01-7.16-18.66-24.77-22.944zm62.86-14.26c-7.292 0-13.273 2.872-18.205 8.757v-6.624a.949.949 0 0 0-.946-.949h-12.947a.948.948 0 0 0-.946.949v73.602c0 .523.423.949.946.949h12.947a.949.949 0 0 0 .946-.949v-23.233c4.933 5.536 10.915 8.241 18.205 8.241 13.549 0 27.265-10.43 27.265-30.368.02-19.943-13.7-30.376-27.25-30.376zm12.21 30.375c0 10.153-6.254 17.238-15.209 17.238-8.853 0-15.531-7.407-15.531-17.238 0-9.83 6.678-17.238 15.531-17.238 8.81-.001 15.21 7.247 15.21 17.237zm50.21-30.375c-17.449 0-31.119 13.436-31.119 30.592 0 16.969 13.576 30.264 30.905 30.264 17.511 0 31.223-13.391 31.223-30.481 0-17.031-13.62-30.373-31.01-30.373zm0 47.714c-9.281 0-16.278-7.457-16.278-17.344 0-9.929 6.755-17.134 16.064-17.134 9.341 0 16.385 7.457 16.385 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.247V50.944a.947.947 0 0 0-.945-.948h-12.945a.95.95 0 0 0-.949.948V65.51h-6.225a.947.947 0 0 0-.943.949v11.127c0 .522.422.949.943.949h6.225v28.791c0 11.635 5.791 17.534 17.212 17.534 4.644 0 8.497-.959 12.128-3.018a.944.944 0 0 0 .478-.821v-10.596a.948.948 0 0 0-1.372-.85c-2.494 1.255-4.905 1.834-7.6 1.834-4.154 0-6.007-1.886-6.007-6.113V78.54h14.247a.946.946 0 0 0 .944-.949V66.465a.918.918 0 0 0-.93-.949zm49.64.057v-1.789c0-5.263 2.018-7.61 6.544-7.61 2.699 0 4.867.536 7.295 1.346a.946.946 0 0 0 1.245-.902v-10.91a.947.947 0 0 0-.67-.909c-2.565-.763-5.847-1.546-10.761-1.546-11.958 0-18.279 6.734-18.279 19.467v2.74h-6.22a.952.952 0 0 0-.95.948v11.184c0 .522.428.949.95.949h6.22v44.409c0 .523.422.949.944.949h12.947a.95.95 0 0 0 .949-.949V78.538h12.088l18.517 44.398c-2.102 4.665-4.169 5.593-6.991 5.593-2.281 0-4.683-.681-7.139-2.025a.972.972 0 0 0-.754-.071.957.957 0 0 0-.56.511l-4.388 9.627a.942.942 0 0 0 .408 1.225c4.581 2.481 8.716 3.54 13.827 3.54 9.56 0 14.844-4.453 19.502-16.433l22.461-58.04a.947.947 0 0 0-.879-1.293h-13.478a.951.951 0 0 0-.897.636l-13.807 39.438-15.123-39.464a.945.945 0 0 0-.884-.61h-22.12zm-28.78-.057h-12.947a.95.95 0 0 0-.949.949v56.485a.95.95 0 0 0 .949.949H446.5a.951.951 0 0 0 .949-.949V66.463a.947.947 0 0 0-.95-.949zm-6.4-25.719c-5.129 0-9.291 4.152-9.291 9.281 0 5.132 4.163 9.289 9.291 9.289 5.127 0 9.285-4.157 9.285-9.289 0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.124 0-9.111-4.115-9.111-9.112s4.039-9.159 9.159-9.159a9.074 9.074 0 0 1 9.111 9.107c0 4.997-4.04 9.164-9.16 9.164zm.05-17.365c-4.667 0-8.198 3.71-8.198 8.253 0 4.541 3.506 8.201 8.151 8.201 4.666 0 8.201-3.707 8.201-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.577 3.608h-2.173l-2.32-3.31h-1.995v3.31h-1.819v-9.564h4.265c2.222 0 3.683 1.137 3.683 3.051.01 1.568-.9 2.526-2.21 2.905zm-1.54-4.315h-2.372v3.025h2.372c1.184 0 1.891-.579 1.891-1.514 0-.984-.71-1.511-1.89-1.511z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-size: 100%;
    display: inline-block;
    max-width: 100%;
    width: 200px;
  }

  background: rgb(36, 36, 36);
  font-family: "monteserrat", sans-serif;
  color: #ffffff;
  font-weight: bolder;

  a {
    text-decoration: none;
    color: #1db954;
  }

  a:hover {
    color: rgb(41, 219, 103);
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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
    font-size: 16px;
    padding-bottom: 15px;
    font-weight: bolder;
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

  .apl-btn {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    padding-bottom: 20px;
  }
  .apl-btn button {
    width: 100%;
    height: 45px;
    border-radius: 50px;
    background: #000000;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }

  .apl-btn button:hover {
    background: #181818;
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
    background: rgb(36, 36, 36);
    border-radius: 5px;
    border: 1px solid #1db954;
    margin-top: 10px;
  }

  .login label {
    margin-top: 25px;
    word-wrap: none;
    padding-left: 10px;
  }
  .login button {
    float: right;
    padding: 15px 80px;
    border-radius: 90px;
    background: #1db954;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    border: none;
  }

  .login button:hover {
    background: rgb(37, 221, 102);
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
