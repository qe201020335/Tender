import React, { StrictMode } from 'react'
import "./UserLogin.css"

const LoginForm = ({username, password, changeHandlerUsername, changeHandlerPassword, loginHandler}) => {
  return(
    <div className="userLogin_header">
      <form id="login_form">
        <label><b>Username</b></label>
        <input id="username_input" type="text" placeholder="Enter Username" name="uname" value = {username} onChange={changeHandlerUsername} required/>
        <br/>
        <label><b>Password</b></label>
        <input id="password_input" type="password" placeholder="Enter Password" name="psw" value = {password} onChange={changeHandlerPassword} required/>
        <br/>
        <br/>
        <button type="submit" className="login_submit" onClick={loginHandler} >Login</button>
      </form>
    </div>
  );
}
export default LoginForm