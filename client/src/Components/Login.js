import React, { useState }  from 'react'
import {Link, useHistory} from 'react-router-dom';
import "./Login.css";
import Button from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import loginHandler from '../Actions/login'
import {TextField} from "@material-ui/core";

const Login = ({ setUserID, setMyUsername, setLoginType }) => {

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
      const response = await loginHandler(username, password);
      if(response) {
        setLoginType(response.userType)
        setUserID(response.userId)
        setMyUsername(response.username)
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

        <TextField className="username_input" type="text" placeholder="Username"
                   name="username" variant="outlined" value={username} error={errorMsg !== ""}
                   onChange={onUsernameChange} autoFocus required fullWidth/>
        <br/>
        <TextField className="password_input" type="password" placeholder="Password"
                   name="password" variant="outlined" value={password} error={errorMsg !== ""}
                   onChange={onPasswordChange} required fullWidth/>
        <br/>
        <span className="error_msg">{errorMsg}</span>
        <br/>
        <ThemeProvider theme={theme}>
          <Button type="submit" className="login_submit" onClick={onLoginClick}
                  variant="contained" color="tender" fullWidth>
            Login!
          </Button>
        </ThemeProvider>
        <br/>
        <span>New user?
          <MuiLink className="login_reg_link" variant="inherit" color="#66ccff"
                   component={Link} to="/signup" underline="hover">
            SignUp!
          </MuiLink>
        </span>
      </div>
    </div>
  );
}
export default Login;