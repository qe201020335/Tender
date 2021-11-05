import React, { StrictMode } from 'react'
import "./Profile.css"

const LoginForm = ({username, password, changeHandlerUsername, changeHandlerPassword, loginHandler, restStatus}) => {
  return(
    <div>
      {(restStatus === true) 
      ? <h2 className='login_header'>Restaurant Login</h2> 
      : <h2 className='login_header'>User Login</h2>}
      
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
    </div>
  );
}
export default LoginForm