import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom';
import "./Login.css";

const Register = ({}) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePass, setRePass] = useState("")
  const [regType, setRegType] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  };
  const onRePasswordChange = (e) => {
    setRePass(e.target.value)
  }

  const onRegTypeSelect = (e) => {
    console.log(e.target.value)
    setRegType(e.target.value)
  };

  const regHandler = () => {
    if (regType === "") {
      setErrorMsg("Please select an account type!")
      return
    } else if (username === "") {
      setErrorMsg("Username cannot be blank!")
      return
    } else if (password === "") {
      setErrorMsg("Password cannot be blank!")
      return
    } else if (password !== rePass) {
      setErrorMsg("Password does not match!")
      return
    } else {
      setErrorMsg("")
    }

    //TODO: Do register
  };

  return(
    <div>
      <h2 className='login_header'>Register</h2>
      <div className="userLogin_header">
        <div id="select_type" onChange={onRegTypeSelect}>
          <label><b>Account Type</b></label><br/>
          <input type="radio" name="Login_Type" value="user"/>
          <label className="radio_label">Normal User</label><br/>
          <input type="radio" id="css" name="Login_Type" value="rest"/>
          <label className="radio_label">Restaurant</label><br/>
        </div>
        <br/>
        <label><b>Username</b></label>
        <input id="username_input" type="text" placeholder="Enter Username" name="username" value = {username} onChange={onUsernameChange} required/>
        <br/>
        <label><b>Password</b></label>
        <input id="password_input" type="password" placeholder="Enter Password" name="password" value = {password} onChange={onPasswordChange} required/>
        <br/>
        <label><b>Reenter Password</b></label>
        <input id="password_input" type="password" placeholder="Enter Password Again" name="password" value = {rePass} onChange={onRePasswordChange} required/>
        <br/>
        <span className="error_msg">{errorMsg}</span>
        <br/>
        <button type="submit" className="login_submit" onClick={regHandler} >Register!</button>
      </div>
    </div>
  );
}
export default Register;