
import "./Login.scss";


export default function Login() {
  
  return (
    <div className="Login">
      <div className="top">
        <div className="wrapper">
          <img className="imgLogo" 
            src="/img/nucflix.png" 
            alt="logo" 
           />
         </div>
      </div> 

      <div className="container">
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>New to Nucflix? <b>Sign Up now.</b></span>
          <small>
            This page is protectted by Google reCAPTCHA to ensure you´re not a 
            bot. <b>Lern more</b>.
          </small>
      </div>
    </div>
  );
}
