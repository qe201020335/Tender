import React, { useState }  from 'react'
import {Link, useHistory} from 'react-router-dom';
import "./Login.css";
import Button from "@mui/material/Button";
import MuiLink from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";

const Signup = () => {

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

  const onRegClick = () => {
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
      <h2 className='login_header'>Sign Up</h2>
      <div className="userLogin_header">
        <div id="select_type" onChange={onRegTypeSelect}>
          <label><b>Account Type</b></label><br/>
          <RadioGroup row name="Login_Type">
            <FormControlLabel value="user" control={<Radio />} label="Normal User" />
            <FormControlLabel value="rest" control={<Radio />} label="Restaurant" />
          </RadioGroup>
        </div>
        <br/>
        <TextField className="username_input" type="text" placeholder="Username"
                   name="username" variant="outlined" value={username}
                   onChange={onUsernameChange} autoFocus required fullWidth/>
        <br/>
        <TextField className="password_input" type="password" placeholder="Password"
                   name="password" variant="outlined" value={password}
                   onChange={onPasswordChange} required fullWidth/>
        <br/>

        <TextField className="password_input" type="password" placeholder="Password Again"
                   name="password" variant="outlined" value={rePass}
                   onChange={onRePasswordChange} required fullWidth/>
        <br/>
        <span className="error_msg">{errorMsg}</span>
        <br/>
        <ThemeProvider theme={theme}>
          <Button type="submit" className="login_submit" onClick={onRegClick}
                  variant="contained" color="tender" fullWidth>
            Sign Up!
          </Button>
        </ThemeProvider>
        <br/>
        <span>New user?
          <MuiLink className="login_reg_link" variant="inherit" color="#66ccff"
                   component={Link} to="/login" underline="hover">
            Login!
          </MuiLink>
        </span>
      </div>
    </div>
  );
}
export default Signup;