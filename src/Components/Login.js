import React, { useState }  from 'react'
import { useHistory } from 'react-router-dom';
import { getRestaurant } from "../Repository/RestaurantRepository";
import { getUser } from "../Repository/UserRepository";

const Login = ({ setLoginStatus, setLoginType, setMyRestaurant, setMyUser, isRestaurant }) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onUsernameChange = (event) => {
    setUsername(event.target.value)
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  };

  const loginHandler = () => {
    if (username === "admin" && password === "admin") {
      setLoginStatus(true);
      setLoginType("ADMIN");
      history.push("/");
    } else {
      if (isRestaurant) {
        if (username === "rest" && password === "rest") {
          setMyRestaurant(getRestaurant("123"))
          setLoginStatus(true);
          setLoginType("RESTAURANT");
          history.push("/my-restaruant");
        }
      } else {
        if (username === "user" && password === "user") {
          setMyUser(getUser("123"))
          setLoginStatus(true);
          setLoginType("USER");
          history.push("/my-favourites");
        }
      }
    }
  };

  return(
    <div>
      {(isRestaurant === true) ? <h2 className='login_header'>Restaurant Login</h2> 
      : <h2 className='login_header'>User Login</h2>}
      <div className="userLogin_header">
        <label><b>Username</b></label>
        <input id="username_input" type="text" placeholder="Enter Username" name="username" value = {username} onChange={onUsernameChange} required/>
        <br/>
        <label><b>Password</b></label>
        <input id="password_input" type="password" placeholder="Enter Password" name="password" value = {password} onChange={onPasswordChange} required/>
        <br/>
        <br/>
        <button type="submit" className="login_submit" onClick={loginHandler} >Login</button>
      </div>
    </div>
  );
}
export default Login;