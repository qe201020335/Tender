import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom';
import loginHandler from '../Actions/login';
import "./Login.css";

const Login = ({ setMyUser, setUserType }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginType, setLoginType] = useState("");
  const history = useHistory();

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  };
  const onLoginTypeSelect = (e) => {
    console.log(e.target.value)
    setLoginType(e.target.value)
  };

  const onLoginClick = () => {
    loginHandler(setMyUser, setUserType, username, password);
  };

  return(
    <div>
      <h2 className='login_header'>Login</h2>
      <div className="userLogin_header">
        <div id="select_type" onChange={onLoginTypeSelect}>
        <label><b>Login Type</b></label><br/>
        <input type="radio" name="Login_Type" value="user"/>
        <label >Normal User</label><br/>
        <input type="radio" id="css" name="Login_Type" value="rest"/>
        <label >Restaurant</label><br/>
        </div>
        <br/>
        <label><b>Username</b></label>
        <input id="username_input" type="text" placeholder="Enter Username" name="username" value = {username} onChange={onUsernameChange} required/>
        <br/>
        <label><b>Password</b></label>
        <input id="password_input" type="password" placeholder="Enter Password" name="password" value = {password} onChange={onPasswordChange} required/>
        <br/>
        <br/>
        <button type="submit" className="login_submit" onClick={onLoginClick} >Login</button>
      </div>
    </div>
  );
}
export default Login;