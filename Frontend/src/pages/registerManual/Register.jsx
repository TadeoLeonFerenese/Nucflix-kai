import { useRef, useState } from "react";
import "./Register.scss";

export default function Register() {
   const [email,setEmail] = useState("")
   const [password, setPassword] = useState("")

   const emailRef = useRef()
   const passwordRef = useRef()

   const handleStart = () => {
     setEmail(emailRef.current.value)
   }
   const handleFinish = () =>  {
      setPassword(passwordRef.current.value)
   }

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="imgLogo" 
            src="/img/nucflix.png" 
            alt="logo" 
           />
        <button className="loginButton">Sign In</button>
         </div>
      </div> 

      <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>{
            // ESTO LO QUE HACE UNA VEZ TIPEAS EL EMAIL CAMBIA EL BOTON A START Y TE PREGUNTA DE GUARDAR CONTRASEÑA
            !email ? (
              <div className="input">
          <input type="email" placeholder="Email Address"  ref={emailRef}/>
          <button className="registerButton" onClick={handleStart}>Get Started</button>
        </div>
            ) : (
         <form className="input">
          <input type="Password" placeholder="Password"  ref={passwordRef}/>
          <button className="registerButton" onClick={handleFinish}>Start</button>
         </form>
            )
          }
      </div>
    </div>
  );
}
