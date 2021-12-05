import React, { useState }  from 'react'
import {Link, useHistory} from 'react-router-dom';
import "./Login.css";
import Button from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import loginHandler from '../Actions/login'

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



  const theme = createTheme({
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      tender: {
        main: '#ca3b28',
        contrastText: '#ffffff',
      },
    },
  });

  return(
    <div>
      <h2 className='login_header'>Login</h2>
      <div className="userLogin_header">
        <label><b>Username</b></label>
        <input className="username_input" type="text" placeholder="Enter Username" name="username" value = {username} onChange={onUsernameChange} required/>
        <br/>
        <label><b>Password</b></label>
        <input className="password_input" type="password" placeholder="Enter Password" name="password" value = {password} onChange={onPasswordChange} required/>
        <br/>
        <span className="error_msg">{errorMsg}</span>
        <br/>
        <ThemeProvider theme={theme}>
          <Button type="submit" className="login_submit" onClick={onLoginClick} variant="contained" color="tender">
            Login!
          </Button>
        </ThemeProvider>
        <br/>
        <span>New user? <MuiLink className="login_reg_link" variant="inherit" color="#66ccff" component={Link} to="/register" underline="hover">Register!</MuiLink></span>
      </div>
    </div>
  );
}
export default Login;