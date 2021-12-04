import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom';
import loginHandler from '../Actions/login'
import "./Login.css";

const Login = ({ setMyUser, setLoginType }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const onLoginClick = async () => {
    if (username === "" || password === "") {
      setErrorMsg("Invalid Username or Password!")
      return
    } else {
      setErrorMsg("")
      const user = await loginHandler(username, password);
      if(user) {
        setLoginType(user.userType)
        setMyUser(user)
        history.push("/")
      } else {
        setErrorMsg("Invalid Username or Password!")
      }
    }
  };

  return(
    <div>
      <h2 className='login_header'>Login</h2>
      <div className="userLogin_header">
        <label><b>Username</b></label>
        <input id="username_input" type="text" placeholder="Enter Username" name="username" value = {username} onChange={onUsernameChange} required/>
        <br/>
        <label><b>Password</b></label>
        <input id="password_input" type="password" placeholder="Enter Password" name="password" value = {password} onChange={onPasswordChange} required/>
        <br/>
        <span className="error_msg">{errorMsg}</span>
        <br/>
        <button type="submit" className="login_submit" onClick={onLoginClick} >Login!</button>
        <br/>
        {/*<span>New user? Click <span className="login_reg_link" component={Link} to="/login" >HERE</span> to login!</span>*/}
      </div>
    </div>
  );
}
export default Login;